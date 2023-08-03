"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TaskList_1 = require("./TaskList");
var Task_1 = require("./Task");
var tasklist = new TaskList_1.TaskList();
tasklist.addtask(new Task_1.Task('buy groceries', 'buy, egg , bread'));
tasklist.addtask(new Task_1.Task('todo list', 'complete the todo list'));
