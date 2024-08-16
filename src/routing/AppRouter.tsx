import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../components/app/Dashboard";
import MainDashboard from "../components/app/MainDashboard";
import { RouteComponent } from "../components/interfaces/Interfaces";
import Home from "../components/website/Home";
import Layout from "../components/website/Layout";
import { appRoutes, websiteRoutes, adminRoutes } from "./Routes";

const AppRouter: FC = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {websiteRoutes.map(
              (componentObject: RouteComponent, index: number) => (
                <Fragment key={index}>
                  <Route
                    caseSensitive
                    path={componentObject.path.toLowerCase()}
                    element={componentObject.component}
                  />
                </Fragment>
              )
            )}
          </Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<MainDashboard />} />
            {appRoutes.map((componentObject: RouteComponent, index: number) => (
              <Fragment key={index}>
                <Route
                  caseSensitive
                  path={componentObject.path.toLowerCase()}
                  element={componentObject.component}
                />
              </Fragment>
            ))}
          </Route>
          <Route path="/dashboard/admin" element={<Dashboard />}>
            <Route index element={<MainDashboard />} />
            {adminRoutes.map((componentObject: RouteComponent, index: number) => (
              <Fragment key={index}>
                <Route
                  caseSensitive
                  path={componentObject.path.toLowerCase()}
                  element={componentObject.component}
                />
              </Fragment>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default AppRouter;
