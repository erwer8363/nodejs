export default {
  functional: true,
  // 组件接收的外部属性
  props: {
    render: Function,
  },
  render: (h, ctx) => {
    const {props} = ctx
    return props.render(h)
  },
}
