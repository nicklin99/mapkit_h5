
### 简单的一个高德地图选址组件

官方的实现了一个选址组件，在此基础上加上了支持关键字搜索，更方便

##### 应用场景

获取标记点的坐标和详细地址，如商家的位置，适合 h5、android webview、ios webview选址获取坐标，快速解决需求

##### 使用方法

实现三种用法，key更换下成自己的高德jsapi 的 key

###### 初级`html`

高德jsapi `AMap`通过script同步加载，适合不熟悉vue框架的

index.html

###### 入门 `vue渐进式`

高德jsapi `AMap` 和 `Vue` 都通过script 同步加载，使用vue框架

示范文件 `vue_sync.html`

###### 推荐 `vue组件`

自动异步加载依赖，vue组件化

vue_async.html
