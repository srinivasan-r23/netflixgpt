import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;
