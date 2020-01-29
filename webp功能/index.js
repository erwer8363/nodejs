// 检测是否支持webp格式文件
function checkwebp(callback) {
  const img = new Image()
  img.onload = function () {
    let result = (img.width > 0) && (img.height > 0)
    callback(result)
  }
  img.onerror = function () {
    callback(false)
  }
  img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
}

function showImage(useWebp) {
  const imgs = Array.from(document.querySelectorAll('img'))
  imgs.forEach(function (i) {
    let src = i.attributes['data-src'].value
    if (useWebp) {
      src = src.replace(/\.jpg|png$/, '.webp')
    }
    i.src = src
  })
}
