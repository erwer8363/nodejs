/**
 * Created by ever on 2020/1/18.
 */
function Price(strings, type) {
    let s1 = strings[0]
    const retailPrice = 20
    const wholeSalePrice = 16
    let showText
    if (type === 'retail') {
        showText = '购买单价是: ' + retailPrice
    } else {
        showText = '购买的批发价是: ' + wholeSalePrice
    }
    return `${s1}${showText}`
}

let showText = Price`您此次的${'retail'}`
console.log(showText)

let user = {name: 's', surname: 'a'}
;[user.name, user.surname] = [1, 2]
console.log(user)
