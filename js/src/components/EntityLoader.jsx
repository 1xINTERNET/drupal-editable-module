import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
import { EntityQuery } from ".";

const EntityLoader = ({ uuid, type, bundle, as, children }) => (
  <EntityQuery bundle={bundle} type={type} uuid={uuid}>
    {(resources, loading, error) => (
      <Dimmer.Dimmable {...(as ? { as } : {})}>
        <Dimmer inverted active={loading}>
          <Loader size="mini" />
        </Dimmer>
        {children(resources, loading, error)}
      </Dimmer.Dimmable>
    )}
  </EntityQuery>
);

export { EntityLoader };
