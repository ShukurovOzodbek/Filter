let arr = [1,2,3,4,5,'string', {a: 10}, [10, 20, 30], [{a: [20, {a: 20}]}], true, [20]]

let boolean = []
let string = []
let number = []
let object = []

arr.filter(item => {
    if (typeof item === 'number') {
        number.push(item)
    }else if (typeof item === 'string') {
        string.push(item)
    }else if (typeof item === 'boolean') {
        boolean.push(item)
    }else if (typeof item === 'object') {
        object.push(item)
    }
})
console.log(number, string, boolean, object);