// const Ut = require('./common')
//
// const img = async () => {
//     try {
//         const url = "http://thumb1.taonanw.com/1_tuku_1_0_1362100781.jpg"
//         const opts = {
//             url,
//             headers: {
//                 'Referer': 'http://www.taonanw.com/'
//             }
//         }
//         const path = './2.jpg'
//         const r1 = Ut.downImg(opts, path)
//         console.log(r1)
//     } catch (e) {
//         console.log(e)
//     }
// }
//
// img()

const ImgUt = require('./imgCommon')

const imgArr = async () => {
    const opts = {
        url: 'http://www.ituba.cc/tag/761.html'
        // url: 'http://www.ituba.cc/meinvtupian/'
    }
    const path = './img2'
    const r1 = ImgUt.getImgSrcList(opts, path)
    console.log(r1)
}

imgArr()