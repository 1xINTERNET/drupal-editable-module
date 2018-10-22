// ALL of these dependencies are taken from the editable_core JS library and not
// part of this bundle.
import React from "react";
// PropTypes will only be included in the development build.
import PropTypes from "prop-types";
import {
  Query,
  EditableEntity,
  EditableEntityForm,
  Provider,
  get,
  css
} from "@drupal-editable/core";

// Editable includes and exposes the emotion library for CSS-in-JS styling. You
// can also apply normal CSS classes to elements.
// See https://emotion.sh/ for more information.
const styles = {
  container: css`
    background: #eee;
    padding: 1em;
    margin-top: 2em;
    margin-bottom: 2em;
  `
};

const ExampleComponent = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <Provider store={props.store}>
    <Query {...props}>
      {({ data, loading, error }) => (
        <div className={styles.container}>
          {loading && <strong>Loading …</strong>}
          {error && <strong>There was an error loading!</strong>}
          {/* Rendering data, data contains the whole entity data. */}
          {data && (
            <div>
              <h3>Simply rendering data with Query</h3>
              <div>The current node title is:</div>
              {/*
                Editable includes and exposes lodash.get as get, this is useful
                for these scenarios.
              */}
              <div>{get(data, "attributes.title")}</div>
              {/*
                Pass the entity data to EditableEntity as a prop.
                EditableEntity will handle saving the data.
              */}
              <EditableEntity data={data}>
                {({ getData, change, save, saving }) => (
                  <div>
                    {/*
                      Within EditableEntity we need to use the getData and
                      getAllData getter functions to get the entity data with
                      changes. (Prefer getData as getAllData is quite expensive)

                      Saving is either false or an array of property paths which
                      are currently being saved.
                    */}
                    {saving && <strong>Currently saving …</strong>}
                    <h3>Changing data with EditableEntity</h3>
                    <p>
                      The currently locally cached change is:
                      {` ${getData("attributes.title")}`}
                    </p>
                    <EditableEntityForm save={save} change={change}>
                      {({ handleChange }) => (
                        /*
                          handleChange uses the data-prop-path attribute to
                          determine which field was changed. This is just syntactic
                          sugar around the change function.
                        */
                        <input
                          type="text"
                          value={getData("attributes.title")}
                          data-prop-path="attributes.title"
                          onChange={handleChange}
                        />
                      )}
                    </EditableEntityForm>
                    <button type="submit" onClick={save}>
                      Save!
                    </button>
                  </div>
                )}
              </EditableEntity>
            </div>
          )}
        </div>
      )}
    </Query>
  </Provider>
);

ExampleComponent.propTypes = {
  type: PropTypes.string.isRequired,
  bundle: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.object.isRequired
};

export { ExampleComponent };
