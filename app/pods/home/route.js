import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function(a,b,c) {
      console.log('error', a,b,c);
    });
  },
});
