/**
 * Created by ever on 2020/12/8.
 */
Array.prototype.binarySearch = function (key) {
  let low = 0
  let high = this.length - 1
  while (low <= high) {
    let middle = parseInt((low + high) / 2)
    if (key === this[middle]) {
      return middle
    } else if (key < this[middle]) {
      high = middle - 1
    } else if(key > this[middle]) {
      low = middle + 1
    } else {
      return -1
    }
  }
}
