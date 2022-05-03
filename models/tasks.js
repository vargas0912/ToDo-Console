const Task = require("./task");


class Tasks {
    _listTasks = {};


    get listArr() {
        const list = [];

        Object.keys(this._listTasks).forEach ( key => {
            const task = this._listTasks[key];

            list.push ( task );
        });

        return list;
    }

    constructor() {
        this._listTasks = {};
    }

    createTask( desc = '') {
        const task = new Task(desc);

        this._listTasks[task.id] = task;

    }

    loadTasksFromArray ( tasks = [] ) {
        tasks.forEach( task => {
            this._listTasks[ task.id ] =  task;
        });
    }
}
    
module.exports = Tasks;