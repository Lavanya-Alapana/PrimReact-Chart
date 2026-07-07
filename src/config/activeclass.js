export const addActiveClass = (items, pathname) => {
  return items.map((item) => ({
    ...item,
    className: item.path === pathname ? "active-menu-item" : "",
    items: item.items ? addActiveClass(item.items, pathname) : undefined,
  }));
};