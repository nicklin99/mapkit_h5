import loader from './../gaode/loader'
import Map from './../gaode/map'
import Search from './../gaode/search.async'
import Picker from './../gaode/picker'

/**
 * 高德地图选址vue组件
 * 并注册全局全局
 */

//组件字符串模板
const template = '<div id="amap"><div><input type="text" name="q" id="q" v-model="q"><input type="button" value="搜索" @click="onSearch"></div><div class="result"><p> {{position}}</p><p>{{address}}</p></div><div id="container" ref="container"></div></div>';

//组件选项配置
const amap = {
    template: template,
    data() {
        return {
            position: '',
            address: '',
            q: '',
            city: '全国',
            map: '',
            placeSearch: '',
        }
    },
    methods: {
        onSearch() {
            this.placeSearch.search(this.q, (status, result) => {
                if (status == 'complete') {
                    var count = result.poiList.count
                    var info = result.info //OK 成功 TIP_CITIES 返回城市信息 cityList 搜索失败，需要具体点关键字

                    if (info != "OK") {
                        console.log(info)
                        console.log(result)
                    }

                    if (count > 0) {
                        var poi = result.poiList.pois[0],
                            location

                        if (poi.location) {
                            location = poi.location
                            this.map.setCenter(new $gd.LngLat(location.lng, location.lat))
                        }
                    }
                }
            })
        },
    },
    mounted: function () {
        loader.then(() => {
            this.map = Map.create(this.$refs.container)
            this.placeSearch = new Search(this.city)
            var pickObj = new Picker('', this.map, null, (position, address) => {
                this.position = position
                this.address = address
            })
        }).catch((error) => {
            console.error(error)
        })

    }
}

Vue.component("amap", amap)