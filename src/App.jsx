import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/common/SideMenubar";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";
import PageHeader from "./components/PageHeader";

import { useLocation } from "react-router-dom";
const queryClient = new QueryClient();

function App() {

   const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/products": "Products",
    "/users": "Users",
    "/reports": "Reports",
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "/";
  return (
    <>
    <QueryClientProvider client={queryClient}>

     <Header />

      <div className="layout">
        <SideMenu />

        <div className="content">
             <PageHeader title={title} />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
             <Route path="/products" element={<Product />} />
          </Routes>
        </div>
      </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
