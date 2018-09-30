// These dependencies are taken from the editable_core JS library and will not
// be part of the generated bundle JS.
import React from "react";
import ReactDOM from "react-dom";

import { ExampleComponent } from "./components";

const mountPoint = document.getElementById("block-editablestarterblock");

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

// The spread syntax will result in the props being applied as though we had
// written: <ExampleComponent type={type} bundle={bundle} uuid={uuid} />
ReactDOM.render(<ExampleComponent {...props} />, mountPoint);
