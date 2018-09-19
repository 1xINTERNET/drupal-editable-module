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
