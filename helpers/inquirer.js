const inquirer = require('inquirer');
require('colors');

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Create task.`
            },
            {
                value: 2,
                name: `${ '2.'.green } List tasks.`            
            },
            {
                value: 3,
                name: `${ '3.'.green } List finish tasks.`
            },
            {
                value: 4,
                name: `${ '4.'.green } List pending tasks.`
            },
            {
                value: 5,
                name: `${ '5.'.green } Finalize task(s).`
            },
            {
                value: 6,
                name: `${ '6.'.green } Delete task.`
            },
            {
                value: 0,
                name: `${ '0.'.green } Exit.`
            }
        ]
    }
]; 

const msgOutput = [
    {
        type: 'input',
        name: 'pause',
        message: `\nPress ${ 'ENTER'.green } for continue`,
        // choices:[{value: 0, name: 'Continue...'}]
    }
];

const inquirerMenu = async() => {    
    console.clear();
    console.log("===============================".green);
    console.log("       Select an option ". green);
    console.log("===============================\n". green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async() => {
    const { pause } = await inquirer.prompt(msgOutput);

    return pause;
};

module.exports = {
    inquirerMenu,
    pause
}