import { EditableRegistry } from "./editableRegistry";

(($, window, Drupal) => {
  // Instantiate the registry, this will be used by other modules to attach
  // their own middlewares, reducers etc.
  window.Editable_Registry = new EditableRegistry();
  const domain = `${window.location.protocol}//${window.location.host}`;

  Drupal.behaviors.editable_core_init = {
    attach(context) {
      // Only do this on the root doc ready call.
      if (context !== document) {
        return;
      }

      window.Editable_Registry.initialize({
        apiEndpoint: `${domain}/jsonapi`,
        csrfTokenEndpoint: `${domain}/session/token`
      });
    }
  };
})(jQuery, window, Drupal);
