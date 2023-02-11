## 1.react-router-dom 6版本的使用
  （1）引入 import { NavLink, Route, Routes } from 'react-router-dom'
  （2）注册路由:     <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                    </Routes>
   (3) 在路由组件的最外层包裹BorverRouter
      import { BrowserRouter } from 'react-router-dom';
            <BrowserRouter>
                <Pages />
            </BrowserRouter>
  总结:6版本对比5版本改变了几点:1. Switch ===> Routes 2. component ===> element 3.{Home} ===> {<Home/>}

## 2. Navigate 路由重定向
   （1）刚进入页面默认展示某个页面
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/' element={<Navigate to='/about' />} />
         </Routes>
    （2）Navi有两个属性: 1.to表示跳转去的地方  2.replace 为替换，默认为false 跳转时为push模式，可以后退， replace={true}，就不能后退

## 3. NavLink高亮问题
   （1） active 决定路由的高亮 ，让它作为类名，然后填写样式
                    .active {
                        background-color: skyblue;
                        color: white;
                    }
    (2) 如果自定义类名，不用active作为类名
      1.className 里面传的是一个函数，参数为 {isActive} (打花括号的意思是把它解构出来)。activeName 为自己定义的样式类名
       <NavLink to='/home' className={({ isActive }) => (isActive ? 'activeName' : '')}> home </NavLink>
     2.封装这个函数
          function changeActiveName({ isActive }) {
                return isActive ? 'activeName' : '';
                }
      在下面使用:
        <NavLink to='/about' className={changeActiveName}>about</NavLink> //注意调用函数不用打（）,路由帮忙调用

## 4. useRoutes 路由表
   (1)引入useRoutes
     import { useRoutes } from 'react-router-dom';
   (2)使用useRoutes
      1）引入路由表 routes
      2) const element = useRoutes(routes); // 根据路由表生成对应的路由规则
      3) 下方注册路由:  {element}
      4) routes 为路由表，单独创建的routes文件夹存放，方便管理
   （3）路由表示列：
        import { Navigate } from 'react-router-dom';
        import Home from '../pages/Home';
        import About from '../pages/About';
        const routes = [
            { path: '/home', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/', element: <Navigate to='/about' /> }
        ];
        export default routes;

## 5. 嵌套路由
  （1）先创建子路由的文件
  （2）配置子路由。子路由地址不用加 ‘/’
          {
            path: '/home',
            element: <Home />,
            children: [
                { path: 'news', element: <News /> },
                { path: 'message', element: <Message /> }
            ]
          }
   (3)在父级路由里面 引入 Outlet (指定路由呈现的位置)
      1）import { Outlet } from 'react-router-dom';
      2）在需要展示的地方 写    <Outlet />

## 6.路由Params传惨
  （1）定义一个展示内容的组件(接收传过来的数据的组件）
  （2）配置子路由（配置展示内容组件的路由）。/:id/:title/:content ，表示站位，需要接收的参数
              {
                path: 'news',
                element: <News />,
                children: [{ path: 'detail/:id/:title/:content', element: <Detail /> }]
              },
  （3）传参数。使用模版字符串
        // 路由连接
        <li key={newObj.id}>
            <Link to={`detail/${newObj.id}/${newObj.title}/${newObj.content}`}> {newObj.title}</Link>
        </li>
  （4）在展示内容组件里面取出并展示数据
      1）需要引入 useParams
        import { useParams } from 'react-router-dom';
      2)取出数据
          const newObj = useParams();
          const { id, title, content } = newObj;

## 7.路由Searache传惨
  （1）定义一个展示内容的组件(接收传过来的数据的组件）
  （2）配置子路由（配置展示内容组件的路由）。
              {
                path: 'news',
                element: <News />,
                children: [{ path: 'detail', element: <Detail /> }]
              },
  （3）传参数。使用模版字符串.
      1.使用 '?' 表示要传递search参数了
      2.使用键值对方式
      3.相邻参数间用 '&' 连接
        // 路由连接
        <li key={newObj.id}>
            <Link to={`detail?id={newObj.id}&title=${newObj.title}&content=${newObj.content}`}> {newObj.title}</Link>
        </li>
  （4）在展示内容组件里面取出并展示数据
      1）需要引入 useSearacheParams
        import { useSearacheParams } from 'react-router-dom';
      2)取出数据。useSearacheParams返回的是一个数组。有点类似useState。
        取出数据需要data调用get方法，里面传入键名的字符串形式
            const [data, setData] = useSearchParams();
            const id = data.get('id');
            const title = data.get('title');
            const content = data.get('content');
        setData 用于修改传过来的Search参数，用法如下：
           <button onClick={() => setData('id=008&title=嘻嘻&content=haha')}>点击修改接收到的search参数</button>

## 8. 路由State参数
  （1）定义一个展示内容的组件(接收传过来的数据的组件）
  （2）配置子路由（配置展示内容组件的路由）。
              {
                path: 'news',
                element: <News />,
                children: [{ path: 'detail', element: <Detail /> }]
              },
  （3）传参数。使用模版字符串
         // 路由连接
        <li key={newObj.id}>
            <Link to='detail' state={{ id: newObj.id, title: newObj.title, content: newObj.content }}>
                {newObj.title}
            </Link>
        </li>
  （4）在展示内容组件里面取出并展示数据
      1）需要引入 useLocation
        import { useLocation } from 'react-router-dom';
      2)取出数据
           const { state: { id, title, content }} = useLocation(); //连续结构赋值

## 9. 编程式路由导航 （useNavigate的作用）
   （1）使用useNavigate 进行页面的前进和后退
      1.先引入 useNavigate  ==>  import { useNavigate } from 'react-router-dom';
      2.接收useNavigate的返回值 ==>  const navigate = useNavigate();
      3.调用返回值并传入参数  ==>    参数 '1' 为前进,'-1'为后退
            function back() {
                navigate(-1);
            }
    (2) 使用useNavigate 指定页面的展示并传递数据
        1.先引入 useNavigate  ==>  import { useNavigate } from 'react-router-dom';
        2.接收useNavigate的返回值 ==>  const navigate = useNavigate();
        3.调用返回值并传入参数  ==>
               function showDetail(newObj) {
                    navigate('detail', {
                        replace: false,
                        state: {
                            id: newObj.id,
                            title: newObj.title,
                            content: newObj.content
                        }
                    });
                }
        第一个参数 'detail' 为:跳转页面的路由路径
        第二个参数 为一个对象:  replace 为跳转方式（值为:false/true）。state:{} 为需要传递的数据