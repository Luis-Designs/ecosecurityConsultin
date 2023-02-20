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
      { label: 'PROTECTORES AUDITIVOS', href: '/products/auditive-protectors' },
      { label: 'CAMILLAS', href: '/products/stretchers' },
      { label: 'ZAPATOS', href: '/products/shoes' },
      { label: 'OTROS', href: '/products/others' },
    ],
  },
  { label: 'SERVICIOS', isCollapsable: false, href: '/services' },
  { label: 'CATÁLOGOS', isCollapsable: false, href: '/catalogue' },
  { label: 'CONTACTO', isCollapsable: false, href: '/contact' },
];
