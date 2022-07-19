const cars = [
    {
        'make': 'audi',
        'model': 'r8',
        'year': '2012'
    }, {
        'make': 'audi',
        'model': 'rs5',
        'year': '2013'
    }, {
        'make': 'ford',
        'model': 'mustang',
        'year': '2012'
    }, {
        'make': 'ford',
        'model': 'fusion',
        'year': '2015'
    }, {
        'make': 'kia',
        'model': 'optima',
        'year': '2012'
    },
]

const groupThings=(key,arr)=>arr.reduce((a,b)=>({
    ...a,
    [b[key]]: [b[key]] in a ?
    a[b[key]].concat([b]):
    [b]
}),{})

console.log(groupThings('make',cars))
/**
 * reduce((a,b)=>({}),{})
 * { spread a}
 * set next item of object whih is  b===>[b[i]]:[b]
 * but wait what if this property already exist on accum i.e a
 * set new condition that will concat in order not to over write
 * previous element set
 * */ 