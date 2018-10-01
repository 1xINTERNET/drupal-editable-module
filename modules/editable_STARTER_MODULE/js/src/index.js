// These dependencies are taken from the window object and are not part of the
// resulting bundle.
import React from "react";
import ReactDOM from "react-dom";

import { ExampleComponent } from "./components";

(($, window, Drupal) => {
  Drupal.behaviors.initialise_starter_module_block = {
    attach(context) {
      $(context)
        .find("#block-editablestarterblock")
        .once("initialise-starter-module-block")
        .each(function eachEditableStarterBlockFn() {
          const mountPoint = $(this).get(0);
          if (!mountPoint) {
            throw new Error("DOM element to mount React component not found!");
          }

          // Try and get the props to mount our React component by parsing the data
          // attribute. You could also use the drupalSettings JS object or some other form
          // of input, like an AJAX call.
          let props;
          try {
            props = JSON.parse(mountPoint.dataset.editableProps);
          } catch (e) {
            throw new Error(
              "data-editable-props attribute was not found on the mountpoint!"
            );
          }

          window.Editable_Registry.addInitHook(store => {
            // The spread syntax will result in the props being applied as though we had
            // written: <ExampleComponent type={type} bundle={bundle} uuid={uuid} />
            ReactDOM.render(
              <ExampleComponent {...props} store={store} />,
              mountPoint
            );
          });
        });
    }
  };
})(jQuery, window, Drupal);
