const {Router} = require('express') 
const route = Router()

route.get('/', '../views/index.njk')

module.exports = route