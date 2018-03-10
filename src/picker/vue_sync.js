import amap from 'amap'
import Map from './gaode/map'
import Picker from './gaode/picker'
import Search from './gaode/search'

var app = new Vue({
    el: '#app',
    data: {
        position: '',
        address: '',
        q: '',
        city: '全国',
        map: '',
        placeSearch: '',
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
                            this.map.setCenter(new amap.LngLat(location.lng, location.lat))
                        }
                    }
                }
            })
        },
        initMap() {
            this.map = Map.create(this.$refs.container)
            this.placeSearch = new Search(this.city)
            var pickObj = new Picker('', this.map, null, (position, address) => {
                this.position = position
                this.address = address
            })
        }
    },
    mounted: function () {
        this.initMap()
    }
})