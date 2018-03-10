/**
 * 高德地图的关键词搜素
 * 
 * 异步调用
 * 
 * @link guide http://lbs.amap.com/api/javascript-api/guide/map-data/search
 * @link api http://lbs.amap.com/api/javascript-api/reference/search#m_AMap.PlaceSearch
 */

import loader from './loader'

loader.then(() => {
    AMap.service('AMap.PlaceSearch', () => {

    })
}).catch((error) => {
    console.error(error)
})

import PlaceSearch from './search.common'

export default PlaceSearch