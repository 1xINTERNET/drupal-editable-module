/**
 * Transform a Resource Identifier Object into an object which can
 * be passed to the Query component to resolve that entity.
 *
 * @param {object} relationship The resource identifier object
 * @return {object|object[]} An object containing the props to query the entity
 */
export const getQueryFromRIO = relationship => {
  // Handle the data property.
  const data = Array.isArray(relationship)
    ? relationship
    : relationship.data
      ? relationship.data
      : relationship;

  // Handle many-to-many relationships.
  if (Array.isArray(data)) {
    return data.map(getQueryFromRIO);
  }

  const { id: uuid, type: typeString } = relationship;
  const [bundle, type] = typeString.split("--");

  return {
    bundle,
    type,
    uuid
  };
};
