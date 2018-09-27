/* eslint-env jest */

import React from "react";
import { shallow } from "enzyme";
import set from "immutable-set";
import * as reduxJsonApi from "redux-json-api";

import { EditableEntityPresentational } from ".";

const dispatchFn = jest.fn(() => null);
const renderFn = jest.fn();

const BUNDLE_PROP = "bundle";
const TYPE_PROP = "type";
const UUID_PROP = "uuid";

const ENTITY_BASICS = {
  id: UUID_PROP,
  type: `${TYPE_PROP}--${BUNDLE_PROP}`
};

const FIELD_1_ADDRESS = "attributes.field";
const ORIGINAL_FIELD_1_VALUE = "original field value";
const CHANGED_FIELD_1_VALUE = "new field value";

const FIELD_2_ADDRESS = "attributes.otherField";
const ORIGINAL_FIELD_2_VALUE = "original field 2 value";
const CHANGED_FIELD_2_VALUE = "new field 2 value";

const FIELD_3_1_ADDRESS = "attributes.complexField.subField";
const ORIGINAL_FIELD_3_1_VALUE = "original field 3.1 value";
const CHANGED_FIELD_3_1_VALUE = "changed field 3.1 value";
const ORIGINAL_FIELD_3_2_VALUE = "original field 3.2 value";
const ORIGINAL_FIELD_3_VALUE = {
  subField: ORIGINAL_FIELD_3_1_VALUE,
  otherSubField: ORIGINAL_FIELD_3_2_VALUE
};

const ENTITY = {
  ...ENTITY_BASICS,
  attributes: {
    field: ORIGINAL_FIELD_1_VALUE,
    otherField: ORIGINAL_FIELD_2_VALUE,
    complexField: ORIGINAL_FIELD_3_VALUE
  }
};

describe("EditableEntity", () => {
  let component;
  let updateEndpointSpy;

  beforeEach(() => {
    updateEndpointSpy = jest
      .spyOn(reduxJsonApi, "updateResource")
      .mockImplementation(k => k);

    component = shallow(
      <EditableEntityPresentational data={ENTITY} dispatch={dispatchFn}>
        {renderFn}
      </EditableEntityPresentational>
    );
  });

  afterEach(() => {
    updateEndpointSpy.mockClear();
  });

  it("should call the render function correctly", () => {
    const {
      change,
      save,
      handleChange,
      handleChangeAndSave,
      getData,
      getAllData,
      saving,
      error
    } = renderFn.mock.calls[0][0];
    expect(change).toBeDefined();
    expect(save).toBeDefined();
    expect(handleChange).toBeDefined();
    expect(handleChangeAndSave).toBeDefined();
    expect(getData).toBeDefined();
    expect(getAllData).toBeDefined();
    expect(saving).toBe(false);
    expect(error).toBe(null);
  });

  it("should return the correct data when using getData", async () => {
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      ORIGINAL_FIELD_1_VALUE
    );
  });

  it("should return the correct data when using getAllData", async () => {
    expect(component.instance().getAllData()).toBe(ENTITY);
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    expect(
      expect(component.instance().getAllData()).toEqual(
        set(ENTITY, FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE)
      )
    );
  });

  it("should change entity when calling change method", async () => {
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      CHANGED_FIELD_1_VALUE
    );
  });

  it("should change entity when calling handleChange method", async () => {
    await component.instance().handleChange({
      target: {
        dataset: {
          propPath: FIELD_1_ADDRESS
        },
        value: CHANGED_FIELD_1_VALUE
      }
    });
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      CHANGED_FIELD_1_VALUE
    );
  });

  it("should always prefer to return local changes instead of new prop data", async () => {
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    component.setProps({
      data: set(ENTITY, FIELD_1_ADDRESS, ORIGINAL_FIELD_1_VALUE)
    });
    component.setProps({
      data: set(ENTITY, FIELD_2_ADDRESS, CHANGED_FIELD_2_VALUE)
    });
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      CHANGED_FIELD_1_VALUE
    );
    expect(component.instance().getData(FIELD_2_ADDRESS)).toBe(
      CHANGED_FIELD_2_VALUE
    );
  });

  it("should reset changes when calling reset method", async () => {
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    await component.instance().reset(FIELD_1_ADDRESS);
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      ORIGINAL_FIELD_1_VALUE
    );
  });

  it("should reset all changes when calling resetAll method", async () => {
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    await component.instance().change(FIELD_2_ADDRESS, CHANGED_FIELD_2_VALUE);

    await component.instance().resetAll();
    expect(component.instance().getData(FIELD_1_ADDRESS)).toBe(
      ORIGINAL_FIELD_1_VALUE
    );
    expect(component.instance().getData(FIELD_2_ADDRESS)).toBe(
      ORIGINAL_FIELD_2_VALUE
    );
  });

  it("should not call updateEndpoint in save method if there were no local changes", async () => {
    await component.instance().save();
    expect(updateEndpointSpy.mock.calls.length).toBe(0);
  });

  it("should call updateEndpoint with the correct entity payload when saving", async () => {
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    await component.instance().save();
    expect(updateEndpointSpy.mock.calls[0][0]).toEqual({
      attributes: {
        field: CHANGED_FIELD_1_VALUE
      },
      ...ENTITY_BASICS
    });
  });

  it("should set the correct saving state when saving", async () => {
    updateEndpointSpy = jest
      .spyOn(reduxJsonApi, "updateResource")
      .mockImplementation(() => new Promise(resolve => setTimeout(resolve, 0)));

    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    component.instance().save();
    expect(component.state("changes")).toEqual({
      [FIELD_1_ADDRESS]: CHANGED_FIELD_1_VALUE
    });
    await Promise.resolve();
  });

  it("should call updateEndpoint with a payload including complete complex fields", async () => {
    await component
      .instance()
      .change(FIELD_3_1_ADDRESS, CHANGED_FIELD_3_1_VALUE);
    await component.instance().save();
    expect(updateEndpointSpy.mock.calls[0][0]).toEqual({
      attributes: {
        complexField: {
          subField: CHANGED_FIELD_3_1_VALUE,
          otherSubField: ORIGINAL_FIELD_3_2_VALUE
        }
      },
      ...ENTITY_BASICS
    });
  });

  it("should set an error state if there was an error saving", async () => {
    /* eslint-disable no-console */
    const _consoleerror = console.error;
    console.error = jest.fn();
    updateEndpointSpy = jest
      .spyOn(reduxJsonApi, "updateResource")
      .mockImplementation(() => {
        throw new Error("Failed!");
      });
    await component.instance().change(FIELD_1_ADDRESS, CHANGED_FIELD_1_VALUE);
    await component.instance().save();
    expect(component.state("error")).toBe("There was an error saving!");
    console.error = _consoleerror;
    /* eslint-enable no-console */
  });
});
