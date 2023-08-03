var tasklists = /** @class */ (function () {
    function tasklists() {
        this.tasks = []; //will store an array of 'task' objects.
    }
    //marked private because it can be only accessed with the 'tasklist' class.
    tasklists.prototype.addtask = function (task) {
        this.tasks.push(task);
    };
    tasklists.prototype.completetask = function (index) {
        this.tasks[index].completed = true; //marking task as completed by changing 'completed'
        //prooperty to 'true'
    };
    tasklists.prototype.edittask = function (index, title, description) {
        this.tasks[index].title = title;
        this.tasks[index].description = description;
    };
    tasklists.prototype.deletetask = function (index) {
        this.tasks.splice(index, 1); //to specify the index of the task to be deleted
    };
    tasklists.prototype.gettasks = function (completed) {
        if (completed === void 0) { completed = undefined; }
        if (completed === undefined) {
            return this.tasks;
        }
        return this.tasks.filter(function (task) { return task.completed === completed; });
        //if completed is true or false, it filters the tasks based on their 'completed' property and returns the filtered arraay
        //else it returns all the task.
    };
    return tasklists;
}());
