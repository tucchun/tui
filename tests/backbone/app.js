window.onload = function(e){
	(function(win, undefined){
		/*// 视图
		var ListView = Backbone.View.extend({
			el: document.body,
			initialize: function(){
				_.bindAll(this, 'render');

				this.render();
			},
			render: function(){
				this.$el.append("<ul><li>hello world</li></ul>");
			}
		});

		var listView = new ListView();*/

		/*var ListView = Backbone.View.extend({
			el: document.body,
			events: {
				"click button#add": "addItem"
			},
			initialize: function(){
				_.bindAll(this, "render", "addItem");

				this.counter = 0;
				this.render();
			},
			render: function(){
				this.$el.append("<button id='add'> Add list item </button>");
				this.$el.append("<ul></ul>");
			},
			addItem: function(){
				this.counter++;
				$('ul', this.el).append("<li>heelo world" + this.counter + "</li>");
			}
		});

		var listView = new ListView();*/

		var Item = Backbone.Model.extend({
			defaults: {
				part1: "hello",
				part2: "world"
			}
		});

	})(window);


};
