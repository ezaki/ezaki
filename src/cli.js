#!/usr/bin/env node

const inquirer = require('inquirer')
const opn = require('opn')

const cli = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'What do yo want to do?',
      choices: [
        'GitHub',
        'Twitter',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.menu) {
      case 'GitHub':
        opn('https://github.com/ezaki', {wait: false})
        cli()
        break
      case 'Twitter':
        opn('https://twitter.com/takato_ezaki', {wait: false})
        cli()
        break
      case 'Exit':
        console.log('Bye!')
        break
      default:
        console.log('Sorry. Something Wrong...')
        cli()
    }
  })
}

cli()
