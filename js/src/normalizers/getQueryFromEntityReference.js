/**
 * Transform a JSON:API entity reference relationship into an object which can
 * be passed to the Query component to resolve that entity.
 *
 * @param {object} reference The entity reference from a JSON:API response
 * object
 * @return {object|object[]} An object containing the props to query the entity
 */
export const getQueryFromEntityReference = reference => {
  if (Array.isArray(reference)) {
    return reference.map(getQueryFromEntityReference);
  }

  return {
    bundle: reference.target_type,
    type: reference.target_id,
    uuid: reference.target_uuid
  };
};
