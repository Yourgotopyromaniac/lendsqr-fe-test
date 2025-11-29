import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { RouteBuilder } from "./routeBuilder";
import { ErrorBoundary } from "../lib/errorBoundary";

const MainRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {RouteBuilder?.length > 0 &&
          RouteBuilder.map((item, idx) => {
            const { Element, path, caseSensitive, Layout, props } = item;
            const PageComponent = Layout ? (
              <Layout {...props}>
                <Element />
              </Layout>
            ) : (
              <Element />
            );

            return (
              <Route
                key={idx}
                path={path}
                element={
                  <ErrorBoundary key={path}>{PageComponent}</ErrorBoundary>
                }
                caseSensitive={caseSensitive}
              />
            );
          })}
      </Routes>
    </>
  );
};

export { MainRouter };

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
