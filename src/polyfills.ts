//填充物
import 'core-js/es6'
import 'core-js/es7/reflect'
import 'zone.js/dist/zone'
if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'aot') {
  // Production
} else {
  // Development
  Error['stackTraceLimit'] = Infinity
  require('zone.js/dist/long-stack-trace-zone')
}