import { createSelector } from "reselect";

const selectApiScope = state => state.api;

const selectResourceIds = (state, props) => props.resourceIds;

export const selectResources = createSelector(
  [selectApiScope, selectResourceIds],
  (api, resourceIds) =>
    !resourceIds
      ? null
      : Array.isArray(resourceIds)
        ? resourceIds.map(resourceId =>
            api[resourceId.type].data.find(
              resource => resource.id === resourceId.id
            )
          )
        : api[resourceIds.type].data.find(
            resource => resource.id === resourceIds.id
          )
);
