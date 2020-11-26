/**
 * Created by ever on 2020/10/3.
 */
function myConcat(separator) {
  var args = [...arguments].slice(1)
  return args.join(separator)
}

let arr = myConcat(', ', 'red', 'orange', 'blue')
console.log(arr)
