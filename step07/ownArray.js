function logOperation(operationName, array, callback) {
    const input = [...array]
    const result = callback(array)

    console.log({
        operation: operationName,
        arrayBefore: input,
        arrayAfter: array,
        mutates: mutatesArray(input, array),
        result
    })
}

// 判断是否修改了原数组,如果修改了就返回true, 没有修改就返回false
function mutatesArray(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) {
        return true
    }

    for (let index = 0; index < firstArray.length; index++) {
        if (firstArray[index] !== secondArray[index]) {
            return true
        }
    }
    return false
}

function forEach(array, callback) {
    const {length} = array
    for (let index = 0; index < length; index++) {
        const value = array[index]
        callback(value, index, array)
    }
}

logOperation('forEach', [1, 2, 3, 4, 5], array => forEach(array, value => console.log(value)))

function map(array, callback) {
    const result = []
    const {length} = array
    for (let index = 0; index < length; index++) {
        const value = array[index]
        result[index] = callback(value, index, array)
    }
    return result
}

function push(array, ...values) {
    const {length: arrayLength} = array
    const {length: valuesLength} = values

    for (let index = 0; index < valuesLength; index++) {
        array[arrayLength + index] = values[index]
    }
    return array.length
}

function filter(array, callback) {
    const result = []
    const {length} = array

    for (let index = 0; index < length; index++) {
        const value = array[index]
        if (callback(value, index, array)) {
            push(result, value)
        }
    }
    return result
}

function reduce(array, callback, initValue) {
    const {length} = array

    let acc = initValue
    let startIndex = 0

    if (initValue === undefined) {
        acc = array[0]
        startIndex = 1
    }

    for (let index = startIndex; index < length; index++) {
        const value = array[index]
        acc = callback(acc, value, index, array)
    }
    return acc
}

function findIndex(array, callback) {
    const {length} = array
    for (let index = 0; index < length; index += 1) {
        const value = array[index]
        if (callback(value, index, array)) {
            return index
        }
    }
    return -1
}

function find(array, callback) {
    const index = findIndex(array, callback)
    if (index === -1) {
        return undefined
    }
    return array[index]
}

function indexOf(array, searchValue) {
    const index = findIndex(array, value => value === searchValue)
    return index
}

logOperation('indexOf', [1, 2, 3, 4, 5], array => indexOf(array, 3));

function lastIndexOf(array, searchValue) {
    const {length} = array
    for (let index = length - 1; index > -1; index--) {
        if (array[index] === searchValue) {
            return index
        }
    }
    return -1
}

logOperation('lastIndexOf', [1, 2, 3, 4, 5, 3], array => lastIndexOf(array, 3));

function every(array, callback) {
    const {length} = array
    for (let index = 0; index < length; index++) {
        const value = array[index]
        if (!callback(value, index, array)) {
            return false
        }
    }
    return true
}

logOperation('every', [1, 2, 3, 4, 5], array => every(array, number => Number.isInteger(number)))

function some(array, callback) {
    const {length} = array
    for (let index = 0; index < length; index++) {
        const value = array[index]
        if (callback(value, index, array)) {
            return true
        }
    }
    return false
}

function includes(array, searchValue) {
    const bool = some(array, value => value === searchValue)
    return bool
}

logOperation('includes', [1, 2, 3, 4, 5, 6], array => includes(array, 4))

function concat(array, ...values) {
    const result = [...array]
    const {length} = values
    for (let index = 0; index < length; index++) {
        const value = values[index]
        if (Array.isArray(value)) {
            result.push(...value)
        } else {
            result.push(value)
        }
    }
    return result
}

function join(array, joinWith) {
    return reduce(array, (result, current, index) => {
        if (index === 0) {
            return current
        }
        return `${result}${joinWith}${current}`
    })
}

logOperation('join', [1, 2, 3, 4, 5], array => join(array, '$'))

function reverse(array) {
    const result = []
    const lastIndex = array.length - 1
    for (let index = lastIndex; index > -1; index -= 1) {
        const value = array[index]
        result[lastIndex - index] = value
    }
    return result
}

logOperation('reverse', [1, 2, 3, 4, 5, 6, 7], array => reverse(array))

function shift(array) {
    const {length} = array
    const firstValue = array[0]
    for (let index = 1; index < length; index++) {
        const value = array[index]
        array[index - 1] = value
    }
    array.length = length - 1
    return firstValue
}

function unshift(array, ...values) {
    const mergeArrays = concat(values, ...array)
    const {length: mergeLength} = mergeArrays
    for (let index = 0; index < mergeLength; index++) {
        const value = mergeArrays[index]
        array[index] = value
    }
    return array.length
}

function slice(array, startIndex = 0, endIndex = array.length) {
    const result = []
    for (let index = startIndex; index < endIndex; index++) {
        const value = array[index]
        if (index < array.length) {
            push(result, value)
        }
    }
    return result
}

function splice(array, insertIndex, removeNumberOfElements, ...values) {
    const firstPart = slice(array, 0, insertIndex)
    const secondPart = slice(array, insertIndex + removeNumberOfElements)

    const removedElements = slice(array, insertIndex, insertIndex + removeNumberOfElements)

    const joinedParts = firstPart.concat(values, secondPart)
    const {length: joinedPartsLength} = joinedParts

    for (let index = 0; index < joinedPartsLength; index++) {
        array[index] = joinedParts[index]
    }

    array.length = joinedPartsLength

    return removedElements
}

logOperation('splice', [1, 2, 3, 4, 5, 6], array => splice(array, 2, 3))

function pop(array) {
    const {length} = array
    const value = array[length - 1]
    array.length = length - 1
    return value
}

logOperation('pop', [1, 2, 3, 4, 5], array => pop(array))

function push(array, ...values) {
    const {length: arrayLength} = array
    const {length: valuesLength} = values
    for (let index = 0; index < valuesLength; index++) {
        array[arrayLength + index] = values[index]
    }
    return array.length
}

function fill(array, value, startIndex = 0, endIndex = array.length) {
    for (let index = startIndex; index < endIndex; index++) {
        array[index] = value
    }
    return array
}


function values(array) {
    const {length} = array

    function* createGenerator() {
        for (let index = 0; index < length; index++) {
            const value = array[index]
            yield value
        }
    }

    return createGenerator()
}

function keys(array) {
    const {length} = array

    function* createGenerator() {
        for (let index = 0; index < length; index++) {
            yield index
        }
    }

    return createGenerator()
}

function entries(array) {
    const {length} = array

    function* createGenerator() {
        for (let index = 0; index < length; index++) {
            yield [index, array[index]]
        }
    }

    return createGenerator()
}

function flat(array, depth = 0) {
    if (depth === 0 || !Array.isArray(array)) {
        return array
    }

    return reduce(array, (result, current) => {
        return concat(result, flat(current, depth - 1))
    })
}

function flatMap(array, callback) {
    return flat(map(array, callback), 1)
}
