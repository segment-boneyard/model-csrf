
/**
 * Adds a CSRF header to the model.
 *
 * @param {String} [token]  the csrf token, defaults to window._csrf
 * @return {Function} plugin
 */

module.exports = function (token) {
  if (!token) token = window._csrf;
  return function (Model) {
    Model.headers({ 'X-CSRF-TOKEN': token });
  };
};