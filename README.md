# Improved Contrib UI Core [WIP!]

This contrib module provides a JS library which can be used to decouple parts of Drupal with React. (it does nothing on its own)

To this end it provides several utilities:

- It creates a redux store which acts as a global entity cache and which can be shared between modules
- It polyfills the browser environment to make sure some modern features are available, currently: `fetch`, `Object.assign` and `Promise`
- It exposes a number of utility functions from commonly used libraries:
  - `connect` from `react-redux`
  - `css` from `emotion`
  - `createSelector` from `reselect`
- It exposes some commonly used normalizer functions to work with JSON:API data:
  - `getQueryFromEntityReference` can be used to turn an entity reference into the correct props to use the `Query` component
  - `getQueryFromRIO` can be used to turn a resource identifier object into the correct props to use the `Query` component
- It exposes some React components to work with the global entity cache
  - `Query` to load entities
  - `EditableEntity` to edit an entity

### Data handling components

Data handling happens with these two high-level components. They do not render anything to the DOM and are just data helpers.

See below for examples.

#### Query

Query component for loading entity data.

Props are:

- `bundle` - mandatory `string`
- `type` - mandatory `string`
- `uuid` - optional, `string|string[]`

```jsx
<Query bundle={} type={} uuid={}>
    {({loading, error, data}) => {

    }}
</Query>
```

Its child is a render function which is called with a parameter object containing the following properties:

- `loading` - `boolean`
- `error`- `string`
- `data`- either an array if multiple entities are queried (undefined `uuid` or `uuid` is an array of strings) or simply the entity data (object).

#### EditableEntity

EditableEntity contains a locally cached set of changes which are not synced with the global entity cache or the site (through JSON:API).

Its only prop is `data` which contains the data. If it is called without this the render function is called regardless, the callbacks passed to the render function in this case are `null`.

```jsx
<EditableEntity data={}>
    {({
      change,
      save,
      handleChange,
      handleSave,
      handleChangeAndSave,
      saving,
      dataWithChanges
    }) => {

    }}
</EditableEntity>
```

Its child is a render function which is called with a parameter object containing the following properties:

- `change(propPath: string, propValue: any): void` - change local entity change cache
- `save(): void`- save local entity cache
- `handleChange(evt: SyntheticEvent): void` - change local entity cache with change event from input/select element\*
- `handleChangeAndSave(evt: SyntheticEvent): void`- change and debounce with change event from input/select element\*

\*) Only works if the `data-prop-path` attribute of the input element is the `propPath` of the property to change.

#### Full example

Loading an entity and providing an input field with the data which saves any changes while typing.

```jsx
<Query bundle="node" type="page" uuid="ee97df22-519f-43bf-95e0-294961dc8d23">
    {({loading, error, data}) => {
      <div>
        Data without changes: {JSON.stringify(data)}
        <EditableEntity data={data}>
          {({ handleChangeAndSave, dataWithChanges }) => {
            <input
              type="text"
              onChange={handleChangeAndSave}
              data-prop-path="attributes.title"
              value={
                loading
                ? "Loading..."
                : dataWithChanges.attributes.title
              } />
          }}
        </EditableEntity>
      </div>
    }}
</Query>
```
