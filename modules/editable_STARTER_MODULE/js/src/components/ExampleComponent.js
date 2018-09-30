// ALL of these dependencies are taken from the editable_core JS library and not
// part of this bundle.
import React, { Fragment } from "react";
// PropTypes will only be included in the development build.
import PropTypes from "prop-types";
import {
  Query,
  EditableEntity,
  store,
  Provider,
  get
} from "@1xinternet/editable-core";

const ExampleComponent = props => (
  <Provider store={store}>
    <Query {...props}>
      {({ data, loading, error }) => {
        if (loading) return <strong>Loading …</strong>;
        if (error) return <strong>There was an error loading!</strong>;

        return (
          <Fragment>
            {/* Rendering data */}
            {data && (
              <div>
                <h3>Simply rendering data with Query</h3>
                <div>The current user email address is:</div>
                <div>{get(data, "attributes.mail")}</div>
              </div>
            )}

            {/* Using EditableEntity to change the data */}
            <EditableEntity data={data}>
              {({ getData, handleChange, save }) => (
                <div>
                  <h3>Changing data with EditableEntity</h3>
                  <p>
                    The currently locally cached change is:
                    {" " + getData("attributes.mail")}
                  </p>
                  <input
                    type="text"
                    value={getData("attributes.mail")}
                    data-prop-path="attributes.mail"
                    onChange={handleChange}
                  />
                  <button type="submit" onClick={save}>
                    Save!
                  </button>
                </div>
              )}
            </EditableEntity>
          </Fragment>
        );
      }}
    </Query>
  </Provider>
);

ExampleComponent.propTypes = {
  type: PropTypes.string.isRequired,
  bundle: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired
};

export { ExampleComponent };
