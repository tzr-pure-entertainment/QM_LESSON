1. 组件化
  component 构成page的一块基石，可复用，可传自定义属性定制
  小程序自身没有提供的，我们可以在components文件夹里自定义
  可以使用第三方提供的自定义组件
  vant 小程序基于此组件，70%的工作不需要做，经历了有赞电商团队十几万项目的检验，类电商的项目
2. page.json 通过usingComponent声明要的组件
  wxml 文件由组件构成
3. 有赞写出来vant
4. van-search 用法
  组件代表着一堆在其内部的标签或子组件，进行统一的向外提供组件功能。
  - 外部， wxml 调用组件
  - 组件内部， vant 内部，在使用时，不用操作的
  - 内外交流， props
  定制性，show-action use-action-slot
5. slot 插槽
  让组件内部，插上一个位置标记，调用组件时，将定制标签传到这个slot，实现了组件的定制