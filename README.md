# 4-3 模拟 chrome 空白页

## chrome 模拟页地址

[https://hw-4-4.vercel.app/chrome/](https://hw-4-4.vercel.app/chrome/)

## 还原的功能点

1. 点击弹窗的 overlay, 弹窗出现缩放动效
2. 数字转换成 ip (数字超过最大限制时提示 url 非法)
3. url 是 ip 时 Avatar 显示 IP
4. 不同 shortcut 数量对应的布局
5. 新增/修改/删除时左下角出现的 toast
6. 新增/修改/删除的 undo / restore
7. 修改结果与修改前相同, 不弹 toast
8. google doodle 图片链接
9. 加载网站 favicon
10. url 重复时报错提示, 无法添加

## 依赖安装问题

[ReactJS: Pngquant failed to build, make sure that libpng-dev is installed](https://stackoverflow.com/questions/51278961/reactjs-pngquant-failed-to-build-make-sure-that-libpng-dev-is-installed)
[同上](https://www.baobangdong.cn/resolve-pngquant-install-failed/)

[React is not defined](https://github.com/gatsbyjs/gatsby/issues/28657)

[gatsby-cli 初始化项目失败](https://github.com/gatsbyjs/gatsby/discussions/32112)

## 其他问题

1. 不知道chrome 是按照什么标准判断一个输入是否合法的. 输入 `;;;` 提示非法, 输入`---`则合法;
尝试安装了一个 url 格式校验工具 `valid-url`, 发现上面两个输入都是合法的, 所以无法还原 chrome 的校验规则.
2. url是必须要输入的, 然而不输入时输入框下边又不能显示错误提示. 因此提交按钮是否可用不能单纯依赖 formik 的错误信息, 需要另外加一个变量进行控制. 不知道有什么更好的处理方式;
3. 想把 mobx 加进来, 但是网上没有搜到 gatsby+mobx 的案例(搜索到一个已经过时);
