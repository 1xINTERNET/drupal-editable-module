export const apiEndpointConstructor = resource => {
  const [type, bundle] = resource.type.split("--");
  return `${type}/${bundle}/${resource.id}`;
};
