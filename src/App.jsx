import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/Dashboard";
import CallHistory from "./pages/CallHistory";
import Appointments from "./pages/Appointments";
import Settings from "./pages/Settings";
import EditProfile from "./pages/EditProfile";
import Layout from "./components/layout/layout";

const routes = createRoutesFromElements(
  <>
    <Route Component={Layout}>
      <Route index Component={Dashboard} />
      <Route path="/call-history" Component={CallHistory} />
      <Route path="/appointments" Component={Appointments} />
      <Route path="/settings" Component={Settings} />
      <Route path="/settings/profile" Component={EditProfile} />
    </Route>
  </>
);

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

