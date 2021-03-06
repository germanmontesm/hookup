const util = require('util')
const asyncHooks = require('async_hooks')

// NOTE:
// We are using our custom print method since we cannot use console.log due to
// it initializing new asynchronous resources.
// In the following projects we will use the `./lib/print` module for the same purpose.
function print(obj) {
  process._rawDebug(util.inspect(obj, true, 100, true))
}

function init(id, type, triggerAsyncId, resource) {
  print({ stage: 'init', id, type, triggerAsyncId })
}

const hook = asyncHooks.createHook({ init })
hook.enable()

setTimeout(() => {}, 10)
