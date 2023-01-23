export const menuItems = [
  { label: "INICIO", isCollapsable: false, href: "/" },
  {
    label: "NOSOTROS",
    href: "/about",
  },
  {
    label: "PRODUCTOS",
    isCollapsable: true,
    href: "",
    subLabels: [
      { label: "GUANTES", href: "/guantes" },
      { label: "CASCOS", href: "/cascos" },
    ],
  },
  { label: "SERVICIOS", isCollapsable: false, href: "/services" },
  { label: "CATÁLOGOS", isCollapsable: false, href: "/catalogo" },
  { label: "CONTACTO", isCollapsable: false, href: "/catalogo" },
];
