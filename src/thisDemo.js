/**
 * Created by ever on 2020/1/18.
 */
var name = 'outTest'
let test = {
    name: 'test',
    say: function () {
        console.log(this, this.name)
    },
    needSay: function () {
        return () => {
            console.log(this.name, this)
        }
    }
}

test.say()
let testFun = test.needSay
testFun()()
