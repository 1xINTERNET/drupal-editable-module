# Getting started

The `Editable Core` module provides a library which contains the Javascript file which initialised the central store which contains the entity cache, in addition it exposes a number of useful utilities and components which can be used by other modules and themes to create a decoupled experience.

To explain how this works we will build a simple custom module which provides a block containing a React app to edit an entity.

## Custom module skeleton

The custom module will be called `on_the_fly_edit`.

We create the module directory: `modules/custom/on_the_fly_edit`

Within it we create the module information file

```yaml
# file: on_the_fly_edit/on_the_fly_edit.info.yml
name: On-the-fly edit
type: module
description: "An example module to explain basic usage of editable"
package: Custom
core: 8.x
dependencies:
  - block
  - editable_core
```

As you can see we have defined the core `block` module and `editable_core` as dependencies.

## Creating a custom block

To provide a block with which we can use to mount the React app, we will need to create this file in the subdirectory `/src/Plugin/Block`

```php
<?php
// file: OnTheFlyEditBlock.php
namespace Drupal\on_the_fly_edit\Plugin\Block;
use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'Hello' Block.
 *
 * @Block(
 *   id = "on_the_fly_edit",
 *   admin_label = @Translation("On-the-fly edit"),
 *   category = @Translation("On-the-fly edit"),
 * )
 */
class OneTheFlyEditBlock extends BlockBase {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
      '#type' => 'markup',
      '#markup' => '<div id="on-the-fly-edit-mount-point"></div>,
    );
  }
}
```

## Adding Javascript

Within our custom module directory we will now create a libraries file to define which frontend assets (CSS/JS) our module should include. In our case it is only Javascript.

Create a file called `on_the_fly_edit.libraries.yml` with this content:

```yaml
production:
  version: VERSION
  js:
    js/dist/on_the_fly_edit.js: {}
  dependencies:
    - editable_core/production

development:
  version: VERSION
  js:
    js/dist/on_the_fly_edit.dev.js: {}
  dependencies:
    - editable_core/development
```

We have defined two libraries. The first one is the one we will use within our finished product, it includes the minified and optimised javascript file and depends in turn on the optimised `editable_core` Javascript bundle.

The second we will use during development as it contains helpful error messages, is unminified and will make debugging much easier. This library depends on the development version of the `editable_core` Javascript bundle.

Now we need to create a subdirectory called `js`.

Within it we

This can be used by other modules and themes to adds a library to Drupal, which can be attached by themes and other modules. ([Read here about the different ways this can be achieved](https://www.drupal.org/docs/8/creating-custom-modules/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-module))

If this
