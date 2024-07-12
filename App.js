import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/About/About";
import Contact from "./src/components/Contact/Contact";
import Error from "./src/components/Error/Error";
import RestaurantMenu from "./src/components/RestaurantMenu/RestaurantMenu";
import Shimmer from "./src/components/Shimmer/Shimmer";
// import Grocery from "./src/components/Grocery/Grocery";

const About = lazy(() => import("./src/components/About/About"));
const Grocery = lazy(() => import("./src/components/Grocery/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
