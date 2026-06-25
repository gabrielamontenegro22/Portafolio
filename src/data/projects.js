// Proyectos. Usa **texto** en las descripciones para resaltar en negrita.
// category debe coincidir con un filtro de projectFilters.
export const projects = [
  {
    id: 'bellasync',
    featured: true,
    category: 'saas',
    tag: 'SaaS · Empresarial · Destacado',
    title: 'BellaSync',
    description: [
      'SaaS multi-tenant para salones de belleza en Colombia: varios salones operando sobre una misma plataforma. Incluye reservas online, agenda, caja, inventario, comisiones, reportes y un portal para estilistas.',
      'Diseñado para operar **sin pasarelas ni terceros de pago**: transferencias bancarias, confirmación por WhatsApp y generación de PDFs nativos en el navegador.',
    ],
    chips: ['.NET 8', 'PostgreSQL', 'EF Core', 'Clean Architecture', 'React 19', 'TypeScript', 'Tailwind', 'Vite'],
    arch: [
      { k: 'backend', v: '.NET 8 · EF Core' },
      { k: 'datos', v: 'PostgreSQL' },
      { k: 'frontend', v: 'React 19 + TS' },
      { k: 'modelo', v: 'Multi-tenant' },
      { k: 'pagos', v: 'Transferencia · WhatsApp' },
    ],
  },
  {
    id: 'play-learn',
    category: 'edu',
    tag: 'EdTech · Semillero',
    title: 'Play & Learn',
    description: [
      'Aplicación web educativa y gamificada para enseñar inglés a niños de primero de primaria en la I.E. Atanasio Girardot. Su decisión central es **excluir el speaking** para que niños con dificultades del habla puedan participar en igualdad. Genera boletines de desempeño en PDF.',
    ],
    metrics: [
      { n: '14', l: 'unidades' },
      { n: '42', l: 'juegos' },
      { n: '4', l: 'periodos' },
    ],
    chips: ['React 19', 'Firebase', 'jsPDF'],
  },
  {
    id: 'aimbot',
    category: 'ia',
    tag: 'IA · Visión por Computadora',
    title: 'Aimbot — Detección en tiempo real',
    description: [
      'Sistema de visión por computadora para Duck Hunt: captura la pantalla, detecta los objetivos, predice su trayectoria con un filtro de Kalman y controla el mouse en tiempo real. Tracking multi-objeto con asignación óptima (algoritmo Húngaro) y backend opcional con red neuronal.',
    ],
    chips: ['Python', 'OpenCV', 'Kalman + Húngaro', 'YOLOv8', 'scipy', 'mss'],
  },
];

export const projectFilters = [
  { f: 'all', label: 'Todos' },
  { f: 'saas', label: 'SaaS' },
  { f: 'edu', label: 'Educación' },
  { f: 'ia', label: 'IA & Visión' },
];
