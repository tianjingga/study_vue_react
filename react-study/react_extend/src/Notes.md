###### 配置less样式  修改webpack.config.js
  1.找到webpack.config.js
    node modules => react-scripts => config => webpack.config.js

## 1.setState 更新状态的两种写法
（1）this.setState(a,b),里面可以传入两个参数
     1.第一个参数为改变状态的对象
     2.第二个参数为可选的回调函数（该函数可用于马上查看数据更新后的结果）
  eg:
        const { count } = this.state;
        this.setState(
            { count: count + 1 },
            () => {console.log(this.state.count)}
        );
(2)this.setState(a,b), 里面可以传入两个参数
    1.第一个为函数，该函数可以接收两个参数（state，props）,该函数的返回值为修改状态对象，传入函数可以接收state 不用先解构就拿到state
    2.第二个参数为可选函数的回调
   eg:
       this.setState(
            (state) => ({ count: state.count + 1 }),
            () => {console.log(this.state.count)}
        );

## 2.lazyLoad 路由组件的懒加载
   (1)通过react 的lazy函数配合inport函数动态加载路由组件  ===>  路由组件代码会被分开打包
     eg: const Home = lazy(() => import('./Home'));
   (2)通过react的<Suspense> 把需要懒加载的路由组件包裹起来，该标签里面需要传入一个Loading组件（当懒加载组件还没出现时展示的组件）
     eg:   <Suspense fallback= {<Loading />}>
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
           </Suspense>

## 3.Hooks 常用的三个钩子 （Hook是react 16.8版本新加的特性，可以让你在函数组件中使用state 以及其他的react特性）
   （1）useState()
       1. state Hook 让函数组件也可以有state 状态，对其进行读取操作
       2. 语法:   const [count, setCount] = useState();
       3.useState() 说明：
          参数：初始化的值
          返回值：是包含两个元素的数组，第一个为内部当前状态值，第二个为修改状态值的函数
       4.setCount()
            第一种写法:直接写入结果
            setCount(count + 1);
            第二种写法:传入一个函数
            setCount((count) => count + 1);

    (2)useEffect()
       1.Effect Hook 可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）
       2.useEffect() 副作用操作：
          (1)发送ajax请求数据  （2）设置订阅 或者 启动定时器  （3） 手动更改正式DOM
       3.语法说明
               useEffect(
                ()=>{
                   1. 传的参数为函数，在该函数里面执行任何带副作用的操作
                    return ()=>{
                       2.参数函数的返回值也为函数。该函数在组件卸载前执行，在里面做一些收尾工作（取消订阅/停止计时器）
                    }
                }
                }, [setValue]);   3.不传的话回调函数会一直执行， 如果指定的是 [] 回调函数只会在第一次render()后执行，如果[setValue]传惨，表示监听该变量，变量改变会执行里面的回调
        4.可以把 useEffect  Hook 看作是以下三个函数的组合
           （1）componentDidMount()
            (2)componentDidUpdate()
            (3)componentWillUnmount()
    (3)useRef()
       1.ref Hook 可以在函数组件中储存/查找组件内的标签或其他任意数据
       2.语法 const refContainer  =  useRef()
       3.作用保存标签对象 功能与creatRef() 一样

## 4.Fragment 的用法
    1.使用  <fragment> </fragment>  或则  <></>
    2.作用：可以不用必须有一个正式DOM的根标签了

## 5.context 的用法
  (1)通过react的 createContext()函数创建context容器对象
     const MyContext = createContext();
     const { Provider, Consumer } = MyContext; //可以解构出两个用于标签的，
  (2)渲染组件时外面包裹<Provider>,通过value属性给后代传递数据
      <Provider value={{ useName, age }}>
            <B />
      </Provider>
  (3)后代组件读取数据
    1.第一种方式:仅用于类组件
        static contextType = MyContext;  // 声明接收context
        const { useName, age } = this.context; //读取context中的value数据
    2.第二种方式:函数组件与类组件都可以
          <Consumer>
            {(value) => {
                const { useName, age } = value; //value 就是context中的value数据
                return <h3> A的用户名是:{`${useName},年龄是:${age}`}</h3>;
            }}
          </Consumer>


## 6.PureComponent (组件的优化)
   (1) component 的2个问题
    1.只要执行setState(),即使状态不改变数据，组件也会重新render(),影响性能
    2.只是当前组件render(),也会导致后代组件render()  ===> 效率低

   (2) 效率高的做法:只有当组件的state 或props 的数据改变才重新render

   (3)原因：Component 中的shouldComponentUpdate()总是返回true

  （4）解决：
      1.重写 shouldComponentUpdate()方法，比较新旧的 state和props
            shouldComponentUpdate(nextProps, nextState) {
                   // console.log(this.props, this.state);
                   // console.log(nextProps, nextState);
               return !(this.props.carName === nextProps.carName);
            }
      2.使用PureComponent
          PureComponent重写了shouldComponentUpdate()方法，只有 state和props发生改变才会返回true


## 7.renderProps
  1.childrenProps
    <A>
      <B>xxxxxx</B>
    </A>
    {this.props.children} //取出标签体里面的内容
    问题: A组件不能给B组件传递数据
  2.renderProps
     <A render={(name) => <B name={name} />} />
     A组件: {this.props.render(A组件的数据)}
     B组件:读取A组件传过来的数据 {this.props.A组件的数据}

## 8.ErrorBoundary 错误边界
   特点:不能捕获自己组件出现的错误
  1.作用:用来捕获后代组件错误，渲染备用组件
  2.当该组件的子组件出错时，会触发getDerivedStateFromError 并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error };
    }
  3.配合componentDidCatch使用
        componentDidCatch() {
            console.log('统计此处错误，反馈给服务器，用于通知编码人员进行BUG的解决');
        }