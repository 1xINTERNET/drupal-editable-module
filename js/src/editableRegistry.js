import { createStore, hydrateStore } from "@drupal-editable/core";

export class EditableRegistry {
  constructor() {
    this.initHooks = new Set();
    this.middlewares = new Set();
    this.enhancers = new Set();
    this.hydrationData = [];
    this.settingsData = {};
    this.reducers = {};
    this.store = null;
    this.initialized = false;
  }

  addMiddleWare(middleware) {
    if (this.initialized) {
      throw new Error(
        "Cannot add middleware, the store was already initialized!"
      );
    }
    this.middlewares.add(middleware);
  }

  addEnhancer(enhancer) {
    if (this.initialized) {
      throw new Error(
        "Cannot add enhancer, the store was already initialized!"
      );
    }
    this.enhancers.add(enhancer);
  }

  addReducer(key, reducer) {
    if (this.initialized) {
      throw new Error("Cannot add reducer, the store was already initialized!");
    }
    this.reducers[key] = reducer;
  }

  addHydrationData(resource) {
    const data = resource.data || resource || [];
    this.hydrationData = [
      ...this.hydrationData,
      ...(Array.isArray(data) ? data : [data])
    ];
  }

  addSettingsData(settingsData) {
    this.settingsData = { ...this.settingsData, ...settingsData };
  }

  callInitHook(hook) {
    return hook(this.store, this);
  }

  callInitHooks() {
    this.initHooks.forEach(hook => this.callInitHook(hook));
  }

  addInitHook(hook) {
    if (this.initialized) {
      return this.callInitHook(hook);
    }
    this.initHooks.add(hook);
  }

  hydrate(data) {
    if (data) {
      this.addHydrationData(data);
    }
    this.store.dispatch(hydrateStore({ data: this.hydrationData }));
    this.hydrationData = [];
  }

  getSettings(entityType) {
    // normalize types
    const _entityType = entityType.replace("/", "--");
    if (!this.settingsData[_entityType]) {
      throw new Error(
        `No entity settings were found for type '${_entityType}'!`
      );
    }
    return this.settingsData[_entityType];
  }

  async initialize(settings = {}) {
    this.store = await createStore({
      reducers: this.reducers,
      middlewares: this.middlewares,
      enhancers: this.enhancers,
      ...settings
    });
    if (settings.settingsData) {
      this.addSettingsData(settings.settingsData);
    }
    if (settings.hydrationData) {
      this.hydrate(settings.hydrationData);
    }
    this.initialized = true;
    this.callInitHooks();
  }
}
