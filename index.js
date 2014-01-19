
/**
 * Adds a CSRF header to the model.
 *
 */

module.exports = function (Model) {
  Model.headers({ 'X-CSRF-TOKEN': window._csrf });
};