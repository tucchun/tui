/**
 * Created by TuCChun on 2015/4/16.
 */
define([
    "backbone",
    "text!template/header.html"
], function(Backbone, template){
    return Backbone.View.extend({
        el: "#js-header",
        template: _.template(template),
        initialize: function(opts){
            this.render(opts);
        },
        render: function(opts){
            this.$el.html(this.template(opts));
        }
    });
});