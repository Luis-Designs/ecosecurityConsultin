export const menuItems = [
  { label: 'INICIO', isCollapsable: false, href: '/' },
  {
    label: 'NOSOTROS',
    isCollapsable: false,
    href: '/about',
  },
  {
    label: 'PRODUCTOS',
    isCollapsable: true,
    href: '',
    subLabels: [
      { label: 'GUANTES', href: '/products/gloves' },
      { label: 'CASCOS', href: '/products/helmets' },
    ],
  },
  { label: 'SERVICIOS', isCollapsable: false, href: '/services' },
  { label: 'CATÁLOGOS', isCollapsable: false, href: '/catalogue' },
  { label: 'CONTACTO', isCollapsable: false, href: '/cantact' },
];
