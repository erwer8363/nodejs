## state与props区别
- props 和state是普通的js对象,虽然他们都包含影响渲染输出的信息,但是他们在组件方面的功能是不同的,即:
- state是组件自己管理数据,控制自己的状态,可变
- props是外部传入的数据参数,不可变
- 没有state的组件叫做无状态组件,有state的叫做有状态组件
- 多用props,少用state,也就是多写无状态组件

## 如何创建refs
- Refs是使用React.createRef()创建的,并通过ref属性附加到React元素
```js
class UserForm extends Component{
    handleSubmit = () =>{
        console.log('Input Value is:', this.input.value)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref={(input)=>this.input=input}/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
```
## 在构造函数调用super并将props作为参数传入的用途是啥?
-  在调用super()之前,子类构造函数无法使用this引用,es6子类也是如此,将props参数传递给super()调用的主要原因是在子构造函数中能够通过this.props来获取传入的props
## react生命周期有哪些
- componentWillMount: 在渲染之前执行,用于根组件中的App级配置
- componentDidMount: 在第一次渲染之后执行,可以在这里发送ajax请求,dom的操作或状态更新以及设置事件监听器