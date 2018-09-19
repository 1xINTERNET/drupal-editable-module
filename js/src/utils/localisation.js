import { Drupal } from ".";

export const t = Drupal ? Drupal.t : str => str;
