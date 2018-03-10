import map from './map'

var mapObj = map.create('container')
map.picker('', mapObj, null, (position, address) => {
    console.log(position)
    console.log(address)
})