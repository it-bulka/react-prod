/// <reference types="cypress" />

import * as articleCommand from './commands/article'
import * as commentsCommand from './commands/comments'
import * as commonCommand from './commands/common'
import { login } from './commands/login'
import * as profileCommand from './commands/profile'
import * as rateCommand from './commands/rating'

Cypress.Commands.add('login', login)
Cypress.Commands.addAll(articleCommand)
Cypress.Commands.addAll(commonCommand)
Cypress.Commands.addAll(commentsCommand)
Cypress.Commands.addAll(rateCommand)
Cypress.Commands.addAll(profileCommand)

export {}
