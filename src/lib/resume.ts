export const resume = {
  email: 'nathanm@hanascript.com',
  github: 'https://github.com/hanascript',
  linkedin: 'https://www.linkedin.com/in/nathan-marcelous/',
  about:
    "I grew up wanting to make games, and following that passion led me to web development. Over the years, I've created all kinds of sites and web apps, and along the way, I got pretty good at turning ideas into code. I really enjoy building for the web, and I'd love the opportunity to help bring your projects to life. I care about the details, and I always try to leave the codebase better than I found it.",
  about2:
    "Right now, I'm looking for opportunities where I can keep learning, contribute to meaningful projects, and grow as a developer.",
  services: [
    {
      name: 'Web Development',
      description:
        'I build custom websites that combine clean, efficient code with seamless functionality to bring your vision to life. Every site is crafted with performance and user experience in mind, ensuring your visitors enjoy fast, intuitive interactions that drive results.',
      service: ['CMS Integration', 'E-commerce Solutions', 'Custom Web & Mobile Applications'],
    },
    {
      name: 'Web Design',
      description:
        'I create visually compelling designs that capture the essence of your brand while strategically guiding users toward your business objectives. My designs balance aesthetic appeal with conversion-focused layouts, helping you make a lasting impression and achieve measurable growth.',
      service: ['UI/UX Design', 'Wireframing & Prototyping', 'Brand Integration'],
    },
    // {
    //   name: 'Web Hosting',
    //   href: '/services/web-hosting',
    // },
    // {
    //   name: 'App Maintenance',
    //   href: '/services/web-maintenance',
    // },
    // {
    //   name: 'Consulting',
    //   href: '/services/consulting',
    // },
    // {
    //   name: 'Project Management',
    //   href: '/services/project-management',
    // },
  ],
  projects: [
    {
      id: 1,
      title: 'Inv Manager',
      type: 'ecommerce',
      details: {
        os: 'nextjs 14',
        packages: 'prisma, shadcn, lucide, zod, zustand, next-safe-action',
        status: 'live',
      },
      description:
        'A simple inventory manager tool, that simulates how companies like shopify manage users, products orders and customers',
      links: {
        live: 'https://inventory-manager-zeta-six.vercel.app/',
        repo: 'https://github.com/hanascript/inventory-manager/',
      },
      image: {
        src: '/images/inv-manager.png',
        alt: 'inv-manager',
      },
    },
    {
      id: 2,
      title: 'visualizer',
      type: 'education',
      details: {
        os: 'NextJS 14',
        packages: 'shadcn, lucide, zustand',
        status: 'live',
      },
      description: 'This application allows you to visualize, sorting algorithms in real time',
      links: {
        live: 'https://xvisualizer.vercel.app/',
        repo: 'https://github.com/hanascript/visualizer/',
      },
      image: {
        src: '/images/visualizer.png',
        alt: 'visualizer',
      },
    },
    {
      id: 3,
      title: 'Cashflowe',
      type: 'budgeting',
      details: {
        os: 'nextjs 14',
        packages: 'hono, drizzle, zod, zustand, plaid, tanstack/react-query',
        status: 'live',
      },
      description: 'A budgeting tool that allows you to connect, your bank accounts and track your spending',
      links: {
        live: 'https://cashflowe.vercel.app/',
        repo: 'https://github.com/hanascript/cashflowe/',
      },
      image: {
        src: '/images/cashflowe.png',
        alt: 'cashflowe',
      },
    },
  ],
  blogs: [
    {
      id: 1,
      name: 'Blog A',
      type: 'blog',
      description: 'A description of the blog.',
    },
    {
      id: 2,
      name: 'Blog A',
      type: 'blog',
      description: 'A description of the blog.',
    },
    {
      id: 3,
      name: 'Blog A',
      type: 'blog',
      description: 'A description of the blog.',
    },
  ],
};
