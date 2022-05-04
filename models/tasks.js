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

    listAllTaks () {
       this.listArr.forEach( (task, i ) => {
           const idx = `${i + 1}. `.green;
           const {desc, finishOn} = task;
           const status = ( finishOn ) ? 'Finish'.green : 'Pending'.red;           

           console.log(`${ idx } ${ desc } :: ${ status }`);
       });
    }

    listfinishPending ( finish = true ) {
        this.listArr.forEach( (task) => {
            
            const {desc, finishOn} = task;

            let counter = 0;

            if (finish)
            {
                if (finishOn){
                    counter += 1;
                    
                    console.log(`${ (counter + '.').green } ${ desc } :: ${ finishOn }`);
                }
            }else{
                if (!finish){
                    counter += 1;
                    const status = 'Pending'.red;
                    console.log(`${ (counter + '.').green } ${ desc } :: ${ status }`);
                }
            }
            
 
        });
    }
}
    
module.exports = Tasks;