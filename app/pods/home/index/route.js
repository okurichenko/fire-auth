import Ember from 'ember';

export default Ember.Route.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signIn(provider) {
      let options = { provider: provider };
      let promise = Ember.RSVP.resolve();
      if (provider === 'password') {
        options = Object.assign(options, {
          email: this.get('controller.email'),
          password: this.get('controller.password'),
        });
        const ref = this.get('firebaseApp').auth();
        promise = ref.createUserWithEmailAndPassword(this.get('controller.email'),this.get('controller.password'));
      }
      return promise
        .then(() => {
          return this.get('session').open('firebase', options).then(function(data) {
            console.log(data.currentUser);
          });
        })
        .catch((e) => { console.log(e); });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
