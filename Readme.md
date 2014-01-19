
# model-csrf

  Plugin for component/model to always send along CSRF headers.

## Installation

  Install with [component(1)](http://component.io):

    $ component install segmentio/model-csrf

## API

### plugin([token])

  Adds the `token` as the proper csrf header. If no `token` is given, will use `window._csrf` intead

```js
var Model = require('model');
var csrf = require('model-csrf');

var User = Model('User')
  .use(csrf())
  .attr('email');
```

## License

  MIT
