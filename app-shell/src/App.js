
import React from "react";
const Header = React.lazy(() => import("header/Header"));
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));
const App = () => (
  <React.Suspense fallback={<div>Carregando...</div>}>
    <Header />
    <Dashboard />
  </React.Suspense>
);
export default App;
