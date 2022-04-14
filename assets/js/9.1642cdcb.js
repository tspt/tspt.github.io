(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{175:function(t,n,a){"use strict";a.r(n);var r=a(0),e=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design","aria-hidden":"true"}},[t._v("#")]),t._v(" Design")]),t._v(" "),a("h3",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("注释法")]),t._v("：易于实现，不需要额外的类或函数，提高代码重用性；不提供错误信息，对测试调试没什么帮助")]),t._v(" "),a("li",[a("strong",[t._v("属性检查法")]),t._v("：提供了文档说明；未确保类真正实现了接口")]),t._v(" "),a("li",[a("strong",[t._v("鸭式辩型法")]),t._v("：不借助注释，对所有接口进行检查；不声明实现接口，降低了代码可重用性")])]),t._v(" "),a("h3",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),a("p",[t._v("优点：封装保护内部数据的完整性，数据访问的权限限制为取值器和赋值器的方法，便于重构"),a("br"),t._v("\n缺点：很难进行单元测试，增加错误调试难度")]),t._v(" "),a("h4",{attrs:{id:"_1-门户大开型对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-门户大开型对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 门户大开型对象")]),t._v(" "),a("p",[t._v("定义接口，有取值器和赋值器方法，检验方法")]),t._v(" "),a("h4",{attrs:{id:"_2-用命名规范区别私有成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-用命名规范区别私有成员","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 用命名规范区别私有成员")]),t._v(" "),a("p",[t._v("与门户大开型对象如出一辙，但是用带下划线的属性和方法来标识私有的")]),t._v(" "),a("h4",{attrs:{id:"_3-闭包实现私有成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-闭包实现私有成员","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 闭包实现私有成员")]),t._v(" "),a("p",[t._v("函数是运行在定义它们的作用域，而不是运行在调用它们的作用域。"),a("br"),t._v("\n在构造器作用域中定义相关属性，不需要访问私有属性的方法，可以在 prototyp 上定义。"),a("br"),t._v("\n特权方法是公有方法，能访问私有属性和方法。")]),t._v(" "),a("p",[t._v("对比")]),t._v(" "),a("ul",[a("li",[t._v("第 3 种不利于派生子类，不能访问超类的私有属性和方法；前 2 种可以")]),t._v(" "),a("li",[t._v("第 3 种每个实例会创建一个私有方法和特权方法的新副本，前 2 种不会")])]),t._v(" "),a("h4",{attrs:{id:"_4-静态属性和方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-静态属性和方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 4. 静态属性和方法")]),t._v(" "),a("p",[t._v("在自调用匿名函数中（同时构造函数外）声明的属性和方法，是私有静态属性和方法，只会被创建一份。"),a("br"),t._v("\n不需要访问实例数据，那就创建为私有静态方法。"),a("br"),t._v("\n公有静态属性和方法，直接在构造函数上添加属性。")]),t._v(" "),a("h3",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("h4",{attrs:{id:"_1-类式继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-类式继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 类式继承")]),t._v(" "),a("p",[t._v("通过构造函数实现继承，创建的每个对象都有一份该类所有实例属性副本，但每个实例方法只存在一份，每个对象都有指向它的链接")]),t._v(" "),a("h4",{attrs:{id:"_1-1-原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 原型链")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("手动设置 子类的 prototype 指向超类的实例，并且设置子类原型的 constructor 属性为子类本身")]),t._v(" "),a("li",[t._v("超类的名称被固化在子类的声明中\n"),a("details",[a("pre",[a("code",[t._v("\nfunction Album (artist) {\nthis.artist = artist;\n}\nAlbum.prototype.getArtist = function () {\nreturn this.artist;\n}\nfunction Song (artist, name) {\nAlbum.call(this, artist);\nthis.name = name;\n}\nSong.prototype = new Album();\nSong.prototype.constructor = Song;\nSong.prototype.getName = function () {\nreturn this.name;\n}\nvar song = new Song('Taylor Swift', 'Begin Again');\n// {artist: \"Taylor Swift\", name: \"Begin Again\"}\n")])])])])]),t._v(" "),a("h4",{attrs:{id:"_1-2-extend-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-extend-函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 extend 函数")]),t._v(" "),a("p",[t._v("优点：直接通过 extend 函数实现 子类的 prototype 指向超类的实例，并且设置子类原型的 constructor 属性为子类本身"),a("br"),t._v("\n缺点：超类的名称被固化在子类的声明中")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function extend (subClass, superClass) {\n    var F = function () {}\n    F.prototype = superClass.prototype;\n    subClass.prototype = new F();\n    subClass.prototype.constructor = subClass;\n  }\n  function Album (artist) {\n    this.artist = artist;\n  }\n  Album.prototype.getArtist = function () {\n    return this.artist;\n  }\n  function Song (artist, name) {\n    Album.call(this, artist);\n    this.name = name;\n  }\n  Song.prototype.getName = function () {\n    return this.name;\n  }\n  extend(Song, Album);\n  var song = new Song('Taylor Swift', 'Begin Again');\n  // {artist: \"Taylor Swift\", name: \"Begin Again\"}\n")])])]),t._v(" "),a("p",[t._v("优化：")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function extend (subClass, superClass) {\n    var F = function () {}\n    F.prototype = superClass.prototype;\n    subClass.prototype = new F();\n    subClass.prototype.constructor = subClass;\n    subClass.superClass = superClass.prototype;\n    // 确保超类的constructor属性被正确设置\n    if (superClass.prototype.constructor === Object.prototype.constructor) {\n      superClass.prototype.constructor = superClass;\n    }\n  }\n  function Album (artist) {\n    this.artist = artist;\n  }\n  Album.prototype.getArtist = function () {\n    return this.artist;\n  }\n  function Song (artist, name) {\n    Song.superClass.constructor.call(this, artist);\n    this.name = name;\n  }\n  Song.prototype.getName = function () {\n    return this.name;\n  }\n  extend(Song, Album);\n  var song = new Song('Taylor Swift', 'Begin Again');\n  // {artist: \"Taylor Swift\", name: \"Begin Again\"}\n")])])]),t._v(" "),a("h4",{attrs:{id:"_2-原型式继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-原型式继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 原型式继承")]),t._v(" "),a("p",[t._v("通过创建对象实现继承，克隆出来的对象共享每个属性和方法的唯一一份实例，只在重新赋值时，才会有改变")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function clone (object) {\n    var F = function () {}\n    F.prototype = object;\n    return new F;\n  }\n  var Album = {\n    artist: '',\n    getArtist: function () {\n      return this.artist;\n    }\n  }\n  var Song = clone(Album);\n  Song.name = '';\n  Song.getName = function () {\n    return this.name;\n  }\n  var song = clone(Song);\n  song.artist = 'Taylor Swift';\n  song.name = 'Begin Again';\n")])])]),t._v(" "),a("h4",{attrs:{id:"_3-掺元类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-掺元类","aria-hidden":"true"}},[t._v("#")]),t._v(" 3 掺元类")]),t._v(" "),a("p",[t._v("创建一个具有各种方法的类，然后扩充其他类，")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  var Mixin = function () {}\n  Mixin.prototype = {\n    serialize: function () {}\n  };\n  function augment (rClass, gClass) {\n    for (name in gClass.prototype) {\n      if (!rClass.prototype[name]) {\n        rClass.prototype[name] = gClass.prototype[name]\n      }\n    }\n  }\n  function extend (subClass, superClass) {\n    var F = function () {}\n    F.prototype = superClass.prototype;\n    subClass.prototype = new F();\n    subClass.prototype.constructor = subClass;\n    subClass.superClass = superClass.prototype;\n    // 确保超类的constructor属性被正确设置\n    if (superClass.prototype.constructor === Object.prototype.constructor) {\n      superClass.prototype.constructor = superClass;\n    }\n  }\n  function Album (artist) {\n    this.artist = artist;\n  }\n  Album.prototype.getArtist = function () {\n    return this.artist;\n  }\n  function Song (artist, name) {\n    Song.superClass.constructor.call(this, artist);\n    this.name = name;\n  }\n  Song.prototype.getName = function () {\n    return this.name;\n  }\n  extend(Song, Album);\n  augment(Song, Mixin);\n  var song = new Song('Taylor Swift', 'Begin Again');\n")])])]),t._v(" "),a("p",[t._v("总结：对于内存效率注重的，使用类式继承；对于类之间差异较大的，使用掺元类")]),t._v(" "),a("h3",{attrs:{id:"单体模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单体模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 单体模式")]),t._v(" "),a("p",[t._v("用来划分命名空间并整合一些方法和属性的对象，通过匿名自调用函数实现私有成员")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  var Album = (function () {\n    function getDetailInfo () {}\n    return {\n      artist: '',\n      getArtist: function () {}\n    }\n  })();\n  Album.getArtist();\n")])])]),t._v(" "),a("h4",{attrs:{id:"_1-惰性实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-惰性实例化","aria-hidden":"true"}},[t._v("#")]),t._v(" 1 惰性实例化")]),t._v(" "),a("p",[t._v("延迟初始化，通过是否创建实例判断需要初始化")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  var Album = (function () {\n    var instance;\n    function constructor () {\n      function getDetailInfo () {}\n      return {\n        artist: '',\n        getArtist: function () {}\n      }\n    }\n    return {\n      getInstance: function () {\n        if (!instance) {\n          instance = constructor();\n        }\n        return instance;\n      }\n    }\n  })();\n  Album.getInstance().getArtist();\n")])])]),t._v(" "),a("h4",{attrs:{id:"_2-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分支","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 分支")]),t._v(" "),a("p",[t._v("考虑不同环境需要产生不同的对象，在内部生成的时，需要在判断需要产生哪一个对象所需耗时和生成多个对象所产生的内存占用之间权衡。")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  var Album = (function () {\n    var pc = {};\n    var mobile = {};\n    return navigator.platform === 'Win32' ? pc : mobile;\n  })();\n")])])]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("便于调试和维护，描述性的命名空间增强代码的自我说明性，与第三方插件隔离，防止被他人误改。")]),t._v(" "),a("li",[t._v("使用惰性实例化技术，减少内存消耗；使用分支技术，兼容不同环境或浏览器\n缺点：")]),t._v(" "),a("li",[t._v("可能导致模块间的强耦合，不利于单元测试")]),t._v(" "),a("li",[t._v("对比惰性加载单体，虚拟代理赋予类实例化方式的更多控制权。")])]),t._v(" "),a("h3",{attrs:{id:"方法的链式调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法的链式调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法的链式调用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("事件 添加和删除事件监听器，对事件对象进行规范化处理")])]),t._v(" "),a("li",[a("p",[t._v("DOM 类名管理：样式管理")])]),t._v(" "),a("li",[a("p",[t._v("Ajax 对 XMLHTTPRequest 进行规范化处理\n")]),a("details",[a("pre",[a("code",[t._v("\n(function () {\nfunction Album (artist) {\nthis.artist = artist;\n}\nAlbum.prototype = {\ngetArtist: function () {\nreturn this.artist;\n},\nsetArtist: function (artist) {\nthis.artist = artist;\nreturn this;\n}\n}\nwindow.Album = function () {\nreturn new Album(arguments);\n}\n})();"),a("p"),t._v("\n"),a("p",[t._v("var album = new Album('Taylor Swift');\nalbum.setArtist('John Mayer').getArtist(); // John Mayer\n")])])])]),a("p")])]),t._v(" "),a("h3",{attrs:{id:"工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),a("h4",{attrs:{id:"_1-简单的工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单的工厂模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. 简单的工厂模式")]),t._v(" "),a("p",[t._v("通过一个外部对象来创建成员变量，提供多种类来产生实例")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function ClassicAlbum () {}\n  ClassicAlbum.prototype = {\n    addWrapper: function () {},\n    addTag: function () {}\n  }\n  var AlbumFactory = {\n    createAlbum: function (type) {\n      var album;\n      switch (type) {\n        case 'classic':\n          album = new ClassicAlbum();\n          break;\n        case 'pop':\n          album = new PopAlbum();\n          break;\n        case 'blues':\n          album = new BluesAlbum();\n          break;\n        case 'country':\n        default:\n          bicyle = new CountryAlbum();\n          break;\n      }\n      return album;\n    }\n  }\n  var AlbumShop = function () {};\n  AlbumShop.prototype = {\n    sellAlbum: function (type) {\n      var album = new AlbumFactory.createAlbum(type);\n      album.addWrapper();\n      album.addTag();\n      return album;\n    }\n  }\n  var albumshop = new AlbumShop();\n  ablumshop.sellAlbum('blues');\n  // 商店通知工厂需要的音乐类型，工厂来处理生产对应的音乐类型，然后返回给商店，商店自己进行通用操作\n")])])]),t._v(" "),a("h4",{attrs:{id:"_2-工厂模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-工厂模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 工厂模式")]),t._v(" "),a("p",[t._v("通过子类继承父类，子类调取继承的方法处理公共逻辑，自身的方法可以进行定制化处理")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function ClassicAlbum () {}\n  ClassicAlbum.prototype = {\n    addWrapper: function () {},\n    addTag: function () {}\n  }\n  function extend (subClass, superClass) {\n    var F = function () {}\n    F.prototype = superClass.prototype;\n    subClass.prototype = new F();\n    subClass.prototype.constructor = subClass;\n    subClass.superClass = superClass.prototype;\n    // 确保超类的constructor属性被正确设置\n    if (superClass.prototype.constructor === Object.prototype.constructor) {\n      superClass.prototype.constructor = superClass;\n    }\n  }\n  var AlbumFactory = function () {};\n  AlbumFactory.prototype = {\n    createAlbum: function (type) {\n      throw new Error('need do it by self.');\n    },\n    sellAlbum: function (type) {\n      var album = new this.createAlbum(type);\n      album.addWrapper();\n      album.addTag();\n    }\n  }\n  var AShop = function () {};\n  extend(AShop, AlbumFactory);\n  AShop.prototype.createAlbum = function (type) {\n    var album;\n    switch (type) {\n      case 'classic':\n        album = new ClassicAlbum();\n        break;\n      case 'pop':\n        album = new PopAlbum();\n        break;\n      case 'blues':\n        album = new BluesAlbum();\n        break;\n      case 'country':\n        default:\n        album = new CountryAlbum();\n        break;\n    }\n    return album;\n  };\n  var ashop = new AShop();\n  ashop.sellAlbum('classic');\n  // 商店自己进行处理音乐类型，然后通知工厂进行通用操作，可以进行定制化，只售卖部分产品\n")])])]),t._v(" "),a("h4",{attrs:{id:"_3-整合多个对象的功能集中到一个，弱化对象耦合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-整合多个对象的功能集中到一个，弱化对象耦合","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 整合多个对象的功能集中到一个，弱化对象耦合")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  var AlbumFactory = function () {}\n  AlbumFactory.prototype = {\n    createAlbum: function () {}\n  }\n  var AlbumShop = function (factory, wrap) {\n    this.type = type;\n    this.factory = factory;\n    this.wrap = wrap;\n    this.init();\n  }\n  AlbumShop.prototype = {\n    init: function () {},\n    sellAlbum: function () {\n      var album = this.factory.createAlbum();\n      album = this.wrap.addWrapper(album);\n      album = this.wrap.addTag(album);\n      return album;\n    }\n  }\n  var AlbumWrap = function () {}\n  AlbumWrap.prototype = {\n    addWrapper: function () {},\n    addTag: function () {}\n  }\n  var AlbumManager = {\n    create: function (type) {\n      var factory = new AlbumFactory(type);\n      var wrap = new AlbumWrap(type);\n      return new AlbumShop(type, factory, wrap);\n    }\n  }\n  var am = AlbumManager.create();\n  am.sellAlbum('blue');\n")])])]),t._v(" "),a("h3",{attrs:{id:"桥接模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#桥接模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 桥接模式")]),t._v(" "),a("h4",{attrs:{id:"案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("事件监听器中的回调函数")]),t._v(" "),a("h4",{attrs:{id:"利弊"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：将抽象与其实现隔离开，促进代码模块化，促成更简洁的实现并提高抽象的灵活性，可以把一组类和函数连接起来，提供一种借助于特权函数访问私有数据的手段\n缺点：提高程序复杂程度，加大调试难度")]),t._v(" "),a("h3",{attrs:{id:"组合模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 组合模式")]),t._v(" "),a("p",[t._v("通过一条命令在多个对象上触发复杂的或递归的行为，这种简化粘合性代码，更容易维护，针对复杂行为则被委托给各个对象。\n用同样的方法处理对象的集合与其中的特定子对象，对组合对象的操作将向下传递到所有的组成对象；可以用一批子对象组织成树形结构，使整棵数都可被遍历")]),t._v(" "),a("h4",{attrs:{id:"利弊-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：促进代码重用，利于代码重构，低耦合，深度优先搜索查找节点，只需要操作顶层对象，让子对象传递这个操作就行\n缺点：层次体系大会引起性能问题")]),t._v(" "),a("h3",{attrs:{id:"门面模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#门面模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 门面模式")]),t._v(" "),a("p",[t._v("差异化代码抽离到门面方法里面")]),t._v(" "),a("h4",{attrs:{id:"案例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("编写兼容性工具代码")]),t._v(" "),a("h4",{attrs:{id:"利弊-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：简化类的接口，不提供额外的选择，消除与客户代码间的耦合，抽离出方法，使调用简化\n缺点：针对只使用少许门面元素的情况，增加额外负担")]),t._v(" "),a("h3",{attrs:{id:"适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 适配器模式")]),t._v(" "),a("h4",{attrs:{id:"案例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),a("p",[t._v("两个 js 框架的切换使用，jquery 和 YUI，需要添加对应的适配接口去切换库，大大减少代码改动")]),t._v(" "),a("h4",{attrs:{id:"利弊-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-4","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：协调期待接口与现在接口不兼容问题，用新接口对现有接口进行包装，避免大规模改写现在代码。\n缺点：当需要重写代码时，不需要使用该模式")]),t._v(" "),a("h3",{attrs:{id:"装饰者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装饰者模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 装饰者模式")]),t._v(" "),a("p",[t._v("为类添加特性时，从该类派生自类的解决方法并不实际的话；为对象添加特性，又不改变该对象的代码时\n对被包装对象的功能进行修改或扩充")]),t._v(" "),a("h4",{attrs:{id:"利弊-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-5","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：运行期间为对象增添特性或职责的有力工具，带来灵活性\n缺点：增加负责程度")]),t._v(" "),a("h3",{attrs:{id:"享元模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#享元模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 享元模式")]),t._v(" "),a("p",[t._v("减少程序所需对象的数量，将对象的内部状态划分为内在数据和外在数据，内在数据指类的内部方法所需的信息，没有这种数据就不能正常运转，外部数据是可以从类身上剥离并存储在其外部的信息。将内在状态相同的所有对象替换为同一个共享对象")]),t._v(" "),a("h4",{attrs:{id:"适用场合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场合","aria-hidden":"true"}},[t._v("#")]),t._v(" 适用场合")]),t._v(" "),a("p",[t._v("针对密集型对象，这些对象所保存的数据中至少有一部分能被转化为外在数据（即是能被分离出来，作为参数提供给方法），同时占用的资源相对较少")]),t._v(" "),a("h4",{attrs:{id:"实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 实现步骤")]),t._v(" "),a("ol",[a("li",[t._v("将外在数据从目标类剥离，尽可能删除后该类属性（因实例而异的属性）")]),t._v(" "),a("li",[t._v("创建一个用来控制该类的实例化的工厂")])]),t._v(" "),a("ul",[a("li",[t._v("实现一：用一个对象字面量保存这一类对象的引用，并用来生成唯一性组合作为它们的索引，每次使用前先检查对象字面量是否请求过，否则创建一个新对象并保存在对象字面量里")]),t._v(" "),a("li",[t._v("实现二：对象池，用数组来保存所创建对象的引用，")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("创建一个用来保存外在数据的管理器，该管理器对象负责控制处理外在数据，将内部数据提供给工厂对象并创建一个对象（如果不存在），存在就重用该对象，外在数据被保存在管理器内的数据结构中")])]),t._v(" "),a("h4",{attrs:{id:"利弊-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-6","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：降低网页资源负荷几个数量级，不需要修改原有代码\n缺点：出错的地方可能变成 3 个地方，增加维护难度")]),t._v(" "),a("h3",{attrs:{id:"代理模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 代理模式")]),t._v(" "),a("p",[t._v("代理对象和本体实现了相同的接口，会添加一些控制代码，不会对传递给本体的方法调用进行修改")]),t._v(" "),a("h4",{attrs:{id:"虚拟代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 虚拟代理")]),t._v(" "),a("p",[t._v("针对创建开销较大的本体的访问，将本体实例化推迟到有方法调用的时候（具有触发本体实例化的事件），把构造函数参数保存起来，直到有方法被调用时，才真正执行本体的实例化，是一种优化模式。")]),t._v(" "),a("h4",{attrs:{id:"远程代理、保护代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#远程代理、保护代理","aria-hidden":"true"}},[t._v("#")]),t._v(" 远程代理、保护代理")]),t._v(" "),a("p",[t._v("不适合 JS 中")]),t._v(" "),a("h4",{attrs:{id:"利弊-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-7","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：虚拟代理体现在效率方面\n缺点：代码的复杂性")]),t._v(" "),a("h3",{attrs:{id:"观察者模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),a("p",[t._v("针对大型程序有用，提高 API 灵活性，并行开发的多个实现能够彼此独立地进行修改")]),t._v(" "),a("h4",{attrs:{id:"利弊-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-8","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：让观察对象借助一个事件监听器替你处理各种行为并将信息委托给它的所有订阅者，降低内存消耗和提交互动性能，减少系统开销并提高程序可维护性\n缺点：增加了创建观察对象的加载时间开销，可以使用惰性加载技术处理")]),t._v(" "),a("details",[a("pre",[a("code",[t._v("\n  function Publisher () {\n    this.subscribers = [];\n  }\n  Publisher.prototype.deliver = function (data) {\n    this.subscribers.forEach(function (fn) {\n      fn(data);\n    });\n    return this;\n  }\n  // 订阅\n  Function.prototype.subscribe = function (publisher) {\n    var that = this;\n    var alreadyExists = publisher.subscribers.some(function (el) {\n      return el === that;\n    });\n    if (!alreadyExists) {\n      publisher.subscribers.push(this);\n    }\n    return this;\n  }\n  // 退订\n  Function.prototype.unsubscribe = function (publisher) {\n    var that = this;\n    publisher.subscribers = publisher.subscribers.filter(function (el) {\n      return el !== that;\n    });\n    return this;\n  }\n")])])]),t._v(" "),a("h3",{attrs:{id:"命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 命令模式")]),t._v(" "),a("h4",{attrs:{id:"利弊-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-9","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点: 消除调用操作的对象和实现操作的对象之间的耦合，提高对象之间操作的模块化程度\n缺点：增加代码调试难度")]),t._v(" "),a("h4",{attrs:{id:"适用场合-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#适用场合-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 适用场合")]),t._v(" "),a("p",[t._v("将调用对象与实现操作的对象隔离开，即两个对象间的互动方式需要更高的模块化程度可以用该模式")]),t._v(" "),a("h3",{attrs:{id:"职责链模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#职责链模式","aria-hidden":"true"}},[t._v("#")]),t._v(" 职责链模式")]),t._v(" "),a("h4",{attrs:{id:"事件委托"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件委托","aria-hidden":"true"}},[t._v("#")]),t._v(" 事件委托")]),t._v(" "),a("p",[t._v("事件模型就是职责链实现，通过事件委托有助于优化代码，减少内存消耗，脚本运行快，维护容易")]),t._v(" "),a("h4",{attrs:{id:"利弊-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利弊-10","aria-hidden":"true"}},[t._v("#")]),t._v(" 利弊")]),t._v(" "),a("p",[t._v("优点：消除请求的发送者和接收者的耦合，可以使用只有在运行期间才能知道的条件来把任务分配给最恰当的对象\n缺点：也是一种隐式处理程序，无法知道处理请求的具体是链上哪个环节，可能就不会被处理")])])}],!1,null,null,null);n.default=e.exports}}]);