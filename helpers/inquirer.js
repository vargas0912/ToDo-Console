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
                name: `${ '1.'.yellow } Create task.`
            },
            {
                value: 2,
                name: `${ '2.'.yellow } List tasks.`            
            },
            {
                value: 3,
                name: `${ '3.'.yellow } List finish tasks.`
            },
            {
                value: 4,
                name: `${ '4.'.yellow } List pending tasks.`
            },
            {
                value: 5,
                name: `${ '5.'.yellow } Finalize task(s).`
            },
            {
                value: 6,
                name: `${ '6.'.yellow } Delete task.`
            },
            {
                value: 0,
                name: `${ '0.'.yellow } Exit.`
            }
        ]
    }
]; 

const msgOutput = [
    {
        type: 'input',
        name: 'pause',
        message: `\nPress ${ 'ENTER'.yellow } for continue`,
        // choices:[{value: 0, name: 'Continue...'}]
    }
];

const inquirerMenu = async() => {    
    console.clear();
    console.log("===============================".green);
    console.log("       Select an option ".yellow);
    console.log("===============================\n".green);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const pause = async() => {
    const { pause } = await inquirer.prompt(msgOutput);

    return pause;
};

const readInput = async ( message ) => {
    const question =  [
        {
            type: 'input',
            name: 'desc',
            message,
            validate ( value ) {
                if (value.length === 0) {
                    return 'Please, write a value.';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);

    return desc;
};

module.exports = {
    inquirerMenu,
    pause, 
    readInput
}