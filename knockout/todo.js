(function () {
	var Todo = function (text, done) {
		var self = this;
		self.text = ko.observable(text);
		self.done = ko.observable(done);
	}
	var ViewModel = function () {
		var self = this;
		self.todoText = ko.observable();
		self.todos = ko.observableArray([
			new Todo('learn angular', true),
			new Todo('build an angular app', false)]);
		self.addTodo = function () {
			self.todos.push(new Todo(self.todoText(), false));
			self.todoText("");
		};
		self.total = ko.computed(function () {
			return self.todos().length;
		});
		self.remaining = ko.computed(function () {
			var count = 0;
			self.todos().forEach(function (todo) {
				count += todo.done() ? 0 : 1;
			});
			return count;
		});
		self.archive = function () {			
		    var oldTodos = self.todos();
		    var newTodos = [];
		    oldTodos.forEach(function(todo) {
				if (!todo.done()) newTodos.push(todo);
			});
			self.todos(newTodos);
		}
	}
	var vm = new ViewModel();
	ko.applyBindings(vm);
}());