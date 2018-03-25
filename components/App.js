class App extends Component {
  constructor() {
    super(...arguments)

    // 创建虚拟 DOM 链接
    // 文档 :https://developer.mozilla.org/zh-CN/docs/web/web_components/%E5%BD%B1%E5%AD%90_dom
    const shadowEl = this.attachShadow({
      mode: 'open'
    })

    this.view = document.createElement('div')
    shadowEl.appendChild(this.view)
  }

  render() {
    this.view.innerHTML = `year ! this is - ${this.props.test}`
  }
}

// 注册组件
customElements.define('app-content', App)
