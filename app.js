const loda = require('lodash')


const items = [1, [2, [3, [4]]]]

const newItems = loda.flattenDeep(items)

console.log('NewITems')

console.log(newItems)