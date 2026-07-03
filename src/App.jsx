import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard";
import SideMenu from "./components/common/SideMenubar";
import Users from "./pages/Users";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { Route, Routes } from "react-router-dom";
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="layout">
          <SideMenu />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
