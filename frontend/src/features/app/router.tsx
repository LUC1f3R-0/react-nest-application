import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../../pages/public/HomePage";
import LoginForm from "../auth/components/LoginForm";
import RegisterForm from "../auth/components/RegisterFrom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, },
  { path: '/login', element: <LoginForm />, },
  { path: '/register', element: <RegisterForm />, },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;