import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";


//Auth Pages
const Login = lazy(()=>import("../components/login"))

//Admin Pages
const Admin = lazy(()=> import("../components/Admin"))

//Error Page
const ErrorPage = lazy(()=>import("../components/Error"))

//Loaders
const InPageLoader = lazy(()=>import("../components/Loader/InPageLoader"))
const FullScreenLoader = lazy(()=>import("../components/Loader/fullScreenLoader"))


const basename = process.env.REACT_APP_BASENAME;

const router = createBrowserRouter([
  {
    path:'/login',
    element:(
      <Suspense fallback={<FullScreenLoader/>}>
        <Login/>
      </Suspense>
    ),
    errorElement:(
      <Suspense fallback={<FullScreenLoader/>}>
        <ErrorPage/>
      </Suspense>
    )
  },
  {
    path :'/admin',
    element: (
      <Suspense fallback={<FullScreenLoader/>}>
        <Admin/>
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<FullScreenLoader/>}>
          <ErrorPage/>
      </Suspense>
    ),
    children:[
      {
        path:'/admin',
        element:(
          <Suspense fallback={<FullScreenLoader/>}>
            <InPageLoader/>
          </Suspense>
        ),
        errorElement:(
          <ErrorPage/>
        )
      },
    
    ]
  },
],
{
  basename: basename,
}
);

export default router;
