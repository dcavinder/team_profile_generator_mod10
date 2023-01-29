const fs = require('fs')
const inquirer = require('inquirer')
const htmlGenerator = require('./lib/html_generator')

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')