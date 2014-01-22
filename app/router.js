var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('locations', {path: "locations"}, function(){
     this.resource('weather', {path: ':location_id'});
  });
});

Router.reopen({
  location: 'history'
});

export default Router;
