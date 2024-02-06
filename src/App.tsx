import { createContext, lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { User } from "./pages/UsersPage/types";
import "./App.css";

const UsersPage = lazy(() => import("./pages/UsersPage/UsersPage"));
const UserDetailsPage = lazy(
  () => import("./pages/UserDetailsPage/UserDetailsPage")
);

export const router = createBrowserRouter([
  { path: "/", element: <UsersPage /> },
  { path: "/user/:id", element: <UserDetailsPage /> },
  { path: "/*", element: <div>404</div> },
]);

export interface Context {
  users: Array<User>;
  setUsers: (users: Array<User>) => void;
}

export const UsersContext = createContext<Context>({
  users: [],
  setUsers: () => {},
});

const App = () => {
  const [users, setUsers] = useState<Array<User>>([]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UsersContext.Provider value={{ users, setUsers }}>
        <RouterProvider router={router} />
      </UsersContext.Provider>
    </Suspense>
  );
};

export default App;
