import { EditableRegistry } from "./editableRegistry";
import { hydrateStore } from "@drupal-editable/core";

(($, window, Drupal) => {
  // Instantiate the registry, this will be used by other modules to attach
  // their own middlewares, reducers etc.
  const registry = (window.Editable_Registry = new EditableRegistry());
  const domain = `${window.location.protocol}//${window.location.host}`;

  Drupal.behaviors.editable_core_init = {
    async attach(context, { editable }) {
      // Only do this on the root doc ready call.
      if (context !== document) {
        return;
      }

      await registry.initialize({
        apiEndpoint: `${domain}/jsonapi`,
        csrfTokenEndpoint: `${domain}/session/token`,
        settingsData: editable && editable.entitySettings,
        hydrationData:
          editable &&
          editable.entities &&
          Object.keys(editable.entities).map(k => editable.entities[k].data)
      });
    }
  };
})(jQuery, window, Drupal);
