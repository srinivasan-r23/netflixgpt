import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Body /> },
    { path: "/browse", element: <Browse /> },
    { path: "/login", element: <Login /> },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);
  return <RouterProvider router={appRouter} />;
}

export default App;
