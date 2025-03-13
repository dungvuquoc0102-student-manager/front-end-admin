import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Dashboard from "@/components/Home/Main/Content/Dashboard";
import Class from "@/components/Home/Main/Content/Class";
import User from "@/components/Home/Main/Content/User";
import UserDetail from "@/components/Home/Main/Content/User/UserDetail";
import ClassDetail from "@/components/Home/Main/Content/Class/ClassDetail";
import ClassSubmitForm from "@/components/Home/Main/Content/Class/ClassSubmitForm";
import UserSubmitForm from "@/components/Home/Main/Content/User/UserSubmitForm";

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/admin",
      element: <Home />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "classes",
          element: <Class />,
        },
        {
          path: "classes/detail/:id",
          element: <ClassDetail />,
        },
        {
          path: "classes/edit/:id",
          element: <ClassSubmitForm />,
        },
        {
          path: "users",
          element: <User />,
        },
        {
          path: "users/detail/:id",
          element: <UserDetail />,
        },
        {
          path: "users/edit/:id",
          element: <UserSubmitForm />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoutes;
