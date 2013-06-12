var App = Ember.Application.create();

// Router
App.Router.map(function() {
  // '/#/tables'
  this.resource('tables', function() {
      this.resource('table', {path: ':table_id'})
    });
});

App.TablesRoute = Ember.Route.extend({
  model: function() {
    return App.Table.find();
  }
});

// Controller
App.TablesController = Ember.ArrayController.extend();

// Models
App.Store = DS.Store.extend({
  revision: 11, // Needed b/c of changing ember versions
  adapter: 'DS.FixtureAdapter' // Loads data locally
});

App.Table = DS.Model.extend();

App.Table.FIXTURES = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6}
];
