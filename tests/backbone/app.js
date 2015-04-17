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

		var List = Backbone.Collection.extend({
			model: Item
		});

		var ListView = Backbone.View.extend({
			el: document.body,
			events: {
				"click button#add" : "addItem"
			},
			initialize: function(){
				//_.bindAll(this, "render", "addItem", "appendItem");

				this.collection = new List();
				this.collection.on("add", this.appendItem, this);

				this.counter = 0;
				this.render();
			},
			render: function(){
				var self = this;
				this.$el.append("<button id='add'>Add list item</button>");
				this.$el.append("<ul></ul>");
				_.each(this.collection.models, function(item){
					self.appendItem(item);
				}, this);
			},
			addItem: function(){
				this.counter++;
				var item = new Item();
				item.set({
					part2: item.get("part2") + this.counter
				});
				this.collection.add(item);
			},
			appendItem: function(item){
				this.$("ul", this.el).append("<li>" + item.get("part1") + " " + item.get("part2") + "</li>");
			}
		});

		var listView = new ListView();

	})(window);


};
