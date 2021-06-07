/**
 * @author Connected Business
 */
define([
  'jquery',
  'mobile',
  'underscore',
  'backbone',
  'text!template/20.0.0/settings/general/workstation/workstation.tpl.html'
], function($, $$, _, Backbone, template) {
  var WorkstationPreference = Backbone.View.extend({
    _template: _.template(template),
    tagName: 'li',
    events: {
      "tap": "Selected"
    },

    initialize: function() {},

    render: function() {      
      this.$el.attr("id", this.model.cid);      
      this.$el.html(this._template(this.model.toJSON()));
      return this;
    },

    Selected: function(e) {      
      e.preventDefault();
      this.model.select();
    }
  });
  return WorkstationPreference;
});
