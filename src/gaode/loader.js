/**
 * 异步加载loader
 * 
 * promise实现
 * 
 * @link promise api https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */
import {
    key
} from './../env'

var promises = []
var mLoaded = false

export function onCreate(key) {
    console.log(key)
    var script = document.createElement('script')
    script.async = true
    script.src = 'http://webapi.amap.com/maps?v=1.3&key=' + key + '&plugin=AMap.ToolBar&callback=initAMapJSAPI'
    document.body.appendChild(script)

    promises.push(new Promise((resolve, reject) => {
        var i = 0;
        var timer = setInterval(() => {
            if (i > 10) {
                reject("加载超时")
            }

            //resolve
            if (mLoaded) {
                clearInterval(timer)
                resolve(AMap)
            } else {
                i++;
            }
        }, 500)
    }));
}

window.initAMapJSAPI = function () {
    mLoaded = true
}

try {
    if (!key) {
        throw new Error('key必须先设置')
    }
    onCreate(key)
} catch (e) {
    console.error(e)
}

promises.push(new Promise((resolve, reject) => {
    var ui_script = document.createElement('script')
    ui_script.async = true
    ui_script.src = 'http://webapi.amap.com/ui/1.0/main-async.js'
    document.body.appendChild(ui_script)
    //resolve
    ui_script.onload = function () {
        resolve()
    }
}))

/**
 * loader 一个新的resolved or reject promise
 */
var asyncTask = Promise.all(promises).then((value) => {
    initAMapUI()
}).catch((error) => {
    console.error(error)
    return false
})

export default asyncTask