/**
 * Created by ever on 2020/2/1.
 */
// 平滑过渡到顶端
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop)
        window.scrollTo(0, c - c / 8)
    }
}

scrollToTop()

// 获取页面内所有图像
const getImages = (el, includeDuplicates = false) => {
    const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'))
    return includeDuplicates ? images : [...new Set(images)]
}
