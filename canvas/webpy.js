/**
 * Created by ever on 2019/12/2.
 */

;(function (doc) {
    function addRootTag() {
        doc.documentElement.className += 'webps'
    }

    if (!/(^|;\s?)webps=A/.test(document.cookie)) {
        let img = new Image()
        img.onload = function () {
            if (img.width === 1) {
                addRootTag()
                document.cookie = 'webps=A; max-age=31536000; domain=uing.ph'
            }
        }
        img.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=='
    } else {
        addRootTag()
    }

}(document))