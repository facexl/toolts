const { loopTriggerAsync } = require('./src/index')

loopTriggerAsync(() => { console.log(123) }, 1000, 10, false)
