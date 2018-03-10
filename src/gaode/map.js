/**
 * create 创建 map 实例
 * @link guide http://lbs.amap.com/api/javascript-api/guide/create-map/show-map
 * @link api http://lbs.amap.com/api/javascript-api/reference/map
 * @param {string} el 地图容器id
 */
function create(el) {

    var map = new AMap.Map(el, {
        zoom: 16,
        scrollWheel: false
    })

    map.addControl(new AMap.ToolBar({
        liteStyle: true
    }))

    return map
}

export default {
    create: create,
}