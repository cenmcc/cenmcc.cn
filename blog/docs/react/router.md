### 配置文件

```tsx
function createBrowserRouter(
  routes: RouteObject[],
  opts?: {
    basename?: string;	// 应用程序的基本名称，适用于您无法部署到域的根目录，而是部署到子目录的情况。
    future?: FutureConfig; // 为此路由器启用的一组可选的未来标志
    hydrationData?: HydrationState;	// 对于浏览器 devtool 插件或测试使用与全局不同的窗口等环境很有用window
    window?: Window;
  }
): RemixRouter;

interface RouteObject {
	path?: string;	// 与 URL 匹配的路径模式以确定此路由是否与 URL、链接 href 或表单操作匹配。
	index?: boolean; // 确定路由是否为索引路由。
	children?: React.ReactNode;	// 路由的嵌套
	caseSensitive?: boolean;	// 指示路由是否匹配大小写
	id?: string;
	loader?: LoaderFunction;	// 路由加载器在路由渲染之前被调用，并通过 为元素提供数据useLoaderData。
	action?: ActionFunction;	// 当提交从Form、fetcher或submission发送到路由时调用路由操作。
	element?: React.ReactNode | null;	// 当路由与 URL 匹配时要呈现的 React 元素/组件。
	Component?: React.ComponentType | null;	// 当路由与 URL 匹配时要呈现的 React 元素/组件。
	errorElement?: React.ReactNode | null;	// 当路由在渲染时抛出异常时此 React 元素/组件将渲染而不是正常的element/ Component。
	ErrorBoundary?: React.ComponentType | null; // 当路由在渲染时抛出异常时此 React 元素/组件将渲染而不是正常的element/ Component
	handle?: RouteObject["handle"];	// 任何特定于应用程序的数据。有关详细信息和示例，请参阅useMatches文档。
	shouldRevalidate?: ShouldRevalidateFunction;
	lazy?: LazyRouteFunction<RouteObject>;
    // 为了保持您的应用程序包较小并支持路由的代码拆分，每个路由都可以提供一个异步函数来解析路由定义的非路由匹配部分（ , , loader/ action, Component/element等ErrorBoundary）errorElement。
}
```

### 组件

`<Link />`：页面跳转组件，使用`to`属性指定需要跳转的路径。其中带`/`表示跳转绝对路径，否则拼接路径

`<NavLink></NavLink>`：`<NavLink>`是一种特殊的类型`<Link>`，它知道它是“活动的”还是“待定的”。

| 属性      | 描述                                                         |
| --------- | ------------------------------------------------------------ |
| active    | 组件活跃时默认添加active类                                   |
| className | ({ isActive, isPending }) => string                          |
| style     | ({ isActive, isPending }) => string                          |
| children  | 将 render prop 作为子项传递，以根据活动和挂起状态自定义内容  |
| end       | 精准匹配，匹配URL后面的路径，直接影响`active` `pending` `to` |

`<Outlet>`：嵌套路由在指定位置加载子页面

### Hooks

`useSearchParams()`: 接收url中以问号拼接的参数

```tsx
import { useSearchParams } from 'react-router-dom'

// /home?msg=你好
const [params] = useSearchParams()
params.get('msg') // 你好

```

`useNavigate`: 在已注册的路由组件中引入跳转到其他路由组件`useNavigate()(-1)`表示后退

```tsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/home')	//跳转到home

```

`useParams`:  获取url'/'路径拼接参数的hooks函数

```tsx
import { useParams } from 'react-router-dom'

// /home/:id  as /home/123
const params = useParams();
// params: {id: "123"}

```

`useRoutes`: 路由注册表hooks函数

`useRouteError`: 提供了抛出的错误` {statusText: '错误响应'}`

`useLoaderData`：方法可以接收页面配置`loader`的函数的返回值

`useNavigation`：返回当前导航状态`{ state: '状态'}`，其中状态可以是`"idle" | "submitting" | "loading"`

路由模式

路由模式

- `createBrowserRouter` ：histroy 路由
- `createMemoryRouter` 
- `createHashRouter`：Hash路由

```tsx
// @/router/index.tsx
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loader,
        action: homeAction,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

```



