import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session.isAuthenticated') ? true : this.transitionTo('home.index');
  }
});
