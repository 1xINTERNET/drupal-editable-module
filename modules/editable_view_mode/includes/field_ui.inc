<?php

/**
 * @file
 * View display UI functions for Editable View mode.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Adds the editable settings to view display form.
 *
 * @param array $form
 *   View display form.
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 *   View display form state.
 */
function editable_view_mode_admin_ui(&$form, FormStateInterface $form_state) {
  /* @var \Drupal\Core\Entity\EntityFormInterface $entity_form */
  $entity_form = $form_state->getFormObject();
  /* @var \Drupal\Core\Entity\Display\EntityDisplayInterface $entity_display */
  $entity_display = $entity_form->getEntity();
  $enabled = $entity_display->getThirdPartySetting('editable_view_mode', 'enabled');

  // Create vertical tabs.
  editable_view_mode_admin_ui_vertical_tabs($form);

  // Add editable settings tab.
  $form['editable'] = [
    '#type' => 'details',
    '#group' => 'additional_settings',
    '#title' => t('Editable Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  ];

  $form['editable']['enabled'] = [
    '#type' => 'checkbox',
    '#default_value' => $enabled,
    '#title' => t('Enable'),
    '#description' => t('Enables editable interface for this view display'),
  ];

  array_unshift($form['actions']['submit']['#submit'], 'editable_view_mode_admin_ui_save');
}

/**
 * Create vertical tabs.
 *
 * @param array $form
 *   View display form.
 */
function editable_view_mode_admin_ui_vertical_tabs(&$form) {
  // Add additional settings vertical tab.
  if (!isset($form['additional_settings'])) {
    $form['additional_settings'] = [
      '#type' => 'vertical_tabs',
      '#theme_wrappers' => ['vertical_tabs'],
      '#prefix' => '<div>',
      '#suffix' => '</div>',
      '#tree' => TRUE,
    ];
  }

  // @todo needs core permission
  $view_mode_admin_access = \Drupal::currentUser()->hasPermission('admin_view_modes');
  if (isset($form['modes'])) {
    $form['modes']['#group'] = 'additional_settings';
    $form['modes']['#weight'] = -10;
    if ($view_mode_admin_access) {
      $url = Url::fromRoute('field_ui.display_mode');
      $form['modes']['view_modes_custom']['#description'] = Link::fromTextAndUrl(t('Manage display modes'), $url);
    }
  }
}

/**
 * Save editable settings for current view display.
 *
 * @param array $form
 *   View display form.
 * @param \Drupal\Core\Form\FormStateInterface $form_state
 *   View display form state.
 */
function editable_view_mode_admin_ui_save($form, FormStateInterface $form_state) {
  /* @var \Drupal\Core\Entity\EntityFormInterface $entity_form */
  $entity_form = $form_state->getFormObject();

  // Get the entity display.
  /* @var \Drupal\Core\Entity\Display\EntityDisplayInterface $display */
  $display = $entity_form->getEntity();
  $status = $form_state->getValue('enabled');
  $display->setThirdPartySetting('editable_view_mode', 'enabled', $status);
}
