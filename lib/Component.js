/**
 * 自定义组件模板
 *
 * @class Component
 * @extends {HTMLElement}
 */
class Component extends HTMLElement {
  // 元素创建
  connectedCallback() {
    // 初始化 props
    this.props = {}
    for (const { name, value } of this.attributes) {
      this.props[name] = value
    }

    // 生命周期:首次 render 之前
    if (this.componentWillMount) this.componentWillMount(...arguments)

    // 执行 render
    if (this.render) {
      this.render(...arguments)
    } else {
      console.warn(this, "需要一个 render 函数")
    }
  }

  // 属性发生变化
  attributeChangedCallback() {}
}

// if (!window.module) window.module = {};

// Object.assign(module, { Component });
