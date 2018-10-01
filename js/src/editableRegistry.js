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
    this.middlewares.add(middleware);
  }

  addEnhancer(enhancer) {
    this.enhancers.add(enhancer);
  }

  addReducer(key, reducer) {
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
