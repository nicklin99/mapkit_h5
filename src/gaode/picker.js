/**
 * picker instance create and start
 * 
 * 调用高德地图UI组件库的选址组件 
 * @link http://lbs.amap.com/api/javascript-api/reference-amap-ui/other/positionpicker
 * 
 * @param {object} map 高德地图对象
 * @param {string} dragMapMode 可选'dragMap'、'dragMarker'，默认为'dragMap'
 * @param {Function} success 回调处理
 */
export default function Picker(position, map, dragMapMode, success, fail) {
    return AMapUI.loadUI(['misc/PositionPicker'], function (PositionPicker) {
        var positionPicker = new PositionPicker({
            mode: dragMapMode || 'dragMap', //设定为拖拽地图模式，
            map: map //依赖地图对象
        });

        /**
         * positionResult 
         * {
         *  position 121.428599,28.661397
         *  address 省市地区详细地址
         *  nearestJunction  最近的路口
         *  nearestRoad 最近的路
         *  nearestPOI 最近的POI
         * }
         * 
         * 回调坐标和详细地址
         */
        positionPicker.on('success', function (positionResult) {
            success && success(positionResult.position, positionResult.address)
        });

        positionPicker.on('fail', function (positionResult) {
            console.error(positionResult)
        })

        positionPicker.start(position)

        return positionPicker
    });


}