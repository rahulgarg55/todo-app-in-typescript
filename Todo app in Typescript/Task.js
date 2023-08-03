var taskk = /** @class */ (function () {
    function taskk(title, description, completed) {
        if (description === void 0) { description = ''; }
        if (completed === void 0) { completed = false; }
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
    return taskk;
}());
