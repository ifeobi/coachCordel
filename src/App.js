import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BlogCard from "./components/BlogCard";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "",
        element: <Home />,
      },
      {
        path: "/tips",
        children: [
          {
            index: true,
            path: "",
            element: <BlogCard />,
          },
          {
            path: "/tips/:id",
            element: <BlogDetails />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
