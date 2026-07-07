import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/common/SideMenubar";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./pages/Product";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header title="Dashboard" />

        <div className="layout">
          <SideMenu />

          <div className="content">
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
