import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    var controllerName = this.get("session.isAdminApp") ? "offers" : "application";

    this.render(); // default template
    this.render('appMenuList', {
      into: 'pics',
      outlet: 'appMenuList',
      controller: controllerName
    });
  }
});
