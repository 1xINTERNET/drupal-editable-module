import { createStore } from "@drupal-editable/core";

export class EditableRegistry {
  constructor() {
    this.initHooks = new Set();
    this.middlewares = new Set();
    this.enhancers = new Set();
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

  callInitHooks() {
    this.initHooks.forEach(hook => hook(this.store));
  }

  addInitHook(hook) {
    if (this.initialized) {
      return hook(this.store);
    }
    this.initHooks.add(hook);
  }

  async initialize(settings = {}) {
    this.store = await createStore({
      reducers: this.reducers,
      middlewares: this.middlewares,
      enhancers: this.enhancers,
      ...settings
    });
    this.initialized = true;
    this.callInitHooks();
  }
}
