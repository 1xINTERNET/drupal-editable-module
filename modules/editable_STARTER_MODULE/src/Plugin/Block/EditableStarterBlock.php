<?php
// file: OnTheFlyEditBlock.php
namespace Drupal\editable_starter_module\Plugin\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Component\Serialization\Json;
use Drupal\node\Entity\Node;

/**
 * Provides a 'Editable Starter' Block.
 *
 * @Block(
 *   id = "editable_starter_block",
 *   admin_label = @Translation("Editable Starter Block"),
 *   category = @Translation("Editable Starter Block"),
 * )
 */
class EditableStarterBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    $nid = \Drupal::routeMatch()->getParameter('node')->id();
    $entity = Node::load($nid);
    // … serialize it using the jsonapi service to a response we would get from the API
    $entityFromJsonApi = \Drupal::service('jsonapi.entity.to_jsonapi')->normalize($entity);
    // … and read the correct type/bundle and uuid we need to query the API correctly.
    $entityData = $entityFromJsonApi['data'];
    $typeArray = mb_split('--', $entityData['type']);
    $type = $typeArray[0];
    $bundle = $typeArray[1];
    $uuid = $entityData['id'];

    // Construct the props object
    $props = array(
        'type' => $type,
        'bundle' => $bundle,
        'uuid' => $uuid
    );
    // Serialize it to a JSON string
    $propsAsJson = JSON::encode($props);

    return array(
      '#attributes' => array(
          'id' => 'editable-starter-module-mount',
          'class' => array('my-class'),
          'data-editable-props' => $propsAsJson
      ),
      '#attached' => array(
        'library' => array(
          'editable_starter_module/development'
        )
      )
    );
  }
}