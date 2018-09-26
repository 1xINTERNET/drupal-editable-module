/* eslint-env jest */

import React from "react";
import { shallow } from "enzyme";
import * as reduxJsonApi from "redux-json-api";

import { QueryPresentational } from ".";

const readEndpointSpy = jest
  .spyOn(reduxJsonApi, "readEndpoint")
  .mockImplementation(k => k);

const dispatchFn = jest.fn(() => ({
  body: {
    data: "entityData"
  }
}));

const BUNDLE_PROP = "bundle";
const TYPE_PROP = "type";
const UUID_PROP = "uuid";

describe("Query", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <QueryPresentational
        bundle={BUNDLE_PROP}
        type={TYPE_PROP}
        dispatch={dispatchFn}
        uuid={UUID_PROP}
        apiIsReady
      >
        {() => null}
      </QueryPresentational>
    );
  });

  it("should render correctly", () => {
    expect(component).toMatchSnapshot();
  });

  it("should call readEndpoint with the correct endpoint parameter when fetching", () => {
    expect(readEndpointSpy).toHaveBeenCalledWith(
      `${TYPE_PROP}/${BUNDLE_PROP}/${UUID_PROP}`
    );
  });
});
