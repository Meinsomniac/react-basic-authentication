import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import Home from "../pages/client/Home";
import { AuthWrapper } from "../context/AuthWrapper";

export const authRouter = createBrowserRouter([
  {
    path: "/",
    element:<AuthWrapper><SignIn /></AuthWrapper>,
    children: [
      {
        path: "/sign-in",
        element: <AuthWrapper><SignIn /></AuthWrapper>,
      },
    ],
  },
  {
    path: "/home",
    element: <AuthWrapper><Home /></AuthWrapper>,
  },
  {
    path: "*",
    element:<p>Oops!! page not found</p>,
  },
]);
