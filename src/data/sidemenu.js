import { addActiveClass } from "../config/activeclass";
export const getMenuItems = (navigate, pathname) => {
  const menuItems = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      path: "/",
      command: () => navigate("/"),
    },
    {
      label: "Analytics",
      icon: "pi pi-chart-line",
      items: [
        {
          label: "Sales",
          icon: "pi pi-chart-bar",
          path: "/analytics/sales",
          command: () => navigate("/analytics/sales"),
        },
        {
          label: "Revenue",
          icon: "pi pi-dollar",
          path: "/analytics/revenue",
          command: () => navigate("/analytics/revenue"),
          items: [
            {
              label: "Profit",
              icon: "pi pi-wallet",
              command: () => navigate("/analytics/revenue/profit"),
            },
            {
              label: "Expenses",
              icon: "pi pi-credit-card",
              command: () => navigate("/analytics/revenue/expenses"),
            },
          ],
        },
      ],
    },
    {
      label: "Products",
      icon: "pi pi-box",
      path: "/products",
      command: () => navigate("/products"),
      items: [
        {
          label: "Product List",
          icon: "pi pi-list",
          path: "/products/all",
          command: () => navigate("/products/all"),
        },
        {
          label: "Categories",
          icon: "pi pi-tags",
          command: () => navigate("/products/categories"),
        },
        {
          label: "Inventory",
          icon: "pi pi-database",
          command: () => navigate("/products/inventory"),
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-users",
      path: "/users",
      command: () => navigate("/users"),
      items: [
        {
          label: "All Users",
          icon: "pi pi-users",
          command: () => navigate("/users"),
        },
        {
          label: "Add User",
          icon: "pi pi-user-plus",
          command: () => navigate("/users/add"),
        },
        {
          label: "Roles",
          icon: "pi pi-id-card",
          command: () => navigate("/users/roles"),
        },
        {
          label: "Permissions",
          icon: "pi pi-lock",
          command: () => navigate("/users/permissions"),
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-file",
      command: () => navigate("/reports"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => navigate("/settings"),
    },
  ];
  return addActiveClass(menuItems, pathname);
};
