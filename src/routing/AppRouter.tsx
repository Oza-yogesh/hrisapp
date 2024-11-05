import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/app/Dashboard";
import MainDashboard from "../components/app/MainDashboard";
import { RouteComponent } from "../components/interfaces/Interfaces";
import Home from "../components/website/Home";
import Layout from "../components/website/Layout";
import { appRoutes, websiteRoutes, adminRoutes } from "./Routes";
import CreatePassword from "../components/app/auth/CreatePassword";
import ProtectedRoute, {
  RedirectIfAuthenticated,
} from "../components/ProtectedRoute";

const AppRouter: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <RedirectIfAuthenticated>
                <Layout />
              </RedirectIfAuthenticated>
            }
          >
            <Route index element={<Home />} />
            {websiteRoutes.map(
              (componentObject: RouteComponent, index: number) => (
                <Fragment key={index}>
                  <Route
                    caseSensitive
                    path={componentObject.path.toLowerCase()}
                    element={
                      <RedirectIfAuthenticated>
                        {componentObject.component}
                      </RedirectIfAuthenticated>
                    }
                  />
                </Fragment>
              )
            )}
          </Route>

          {/* Protect the entire Dashboard route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["user", "admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<MainDashboard />} />
            {appRoutes.map((componentObject: RouteComponent, index: number) => (
              <Route
                key={index}
                caseSensitive
                path={componentObject.path.toLowerCase()}
                element={componentObject.component} // Directly use the component here
              />
            ))}
          </Route>

          {/* Admin Routes */}
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<MainDashboard />} />
            {adminRoutes.map(
              (componentObject: RouteComponent, index: number) => (
                <Route
                  key={index}
                  caseSensitive
                  path={componentObject.path.toLowerCase()}
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      {componentObject.component}
                    </ProtectedRoute>
                  }
                />
              )
            )}
          </Route>
        </Routes>
        {/* Admin Routes */}

        {/* Separate Route for Setting Password */}
        <Routes>
          <Route path="/set-password" element={<CreatePassword />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
