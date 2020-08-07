require.config({
  paths: {
    jquery: 'lib/jquery',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone'
  }

});

require([

  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});