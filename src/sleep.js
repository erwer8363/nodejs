/**
 * Created by ever on 2020/2/15.
 */
function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

async function one2FiveAsync() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
    await sleep(1000)
  }
}

one2FiveAsync()

