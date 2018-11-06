# Drupal editable

> Currently still in alpha stage, so APIs are not yet final!

This module provides commonly used building blocks to progressively decoupled Drupal. It does nothing on its own. For an example how to use it, please refer to the `editable_STARTER_MODULE` sub module. (Better documentation will follow once the API is settled.)

## Installation requirements:

- Make sure you have set up to use composer with [asset-packagist](https://lightning.acquia.com/blog/round-your-front-end-javascript-libraries-composer) (Install into the `/libraries` directory)
- Require this module with composer: `composer require drupal/editable`

## Optional modules

### Editable view mode

With help of this module it is possible to make any entity view display "editable". After enabling the module "Manage display" form 
will have a new vertical tab at the bottom of the page called "Editable" where you can mark this view mode as the one with 
editable functionality. After saving the settings with "Enabled" checkbox set to TRUE, whenever the entity is displayed in
given view mode, the visible fields of it will have the new data attribute prefixed with "data-editable-" that stores the 
information needed for the module to provide the inline editing experience. The format of the attribute values is as follows:
`"entity_type--entity_bundle/entity_uuid/field_name/language/view_mode_id"`.

In addition, drupalSettings JS Object is populated with entity information, such as serialized entity in drupalSettings.editable.entities
array with the keys in format `"entity_type--entity_bundle/entity_uuid"` and entity field settings in drupalSettings.editable.entitySettings
array with the keys in format `"entity_type--entity_bundle"`.

Of course all these attributes and drupalSettings data are exposed only to the users with permissions to update current entity.
