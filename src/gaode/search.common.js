//做个包装器，设置一些默认参数
function PlaceSearch(city) {
    var placeSearch = new AMap.PlaceSearch();
    placeSearch.setCity(city || '全国')
    placeSearch.setPageSize(1)
    return placeSearch
}

export default PlaceSearch