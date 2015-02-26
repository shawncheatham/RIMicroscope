Package.describe({
  name: 'scheatham:errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A pattern to display app errors to the user',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.0.3.2');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('scheatham:errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');  

  api.addFiles('errors_tests.js', 'client');
});