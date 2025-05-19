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
      href: '/services/web-development',
    },
    {
      name: 'Web Design',
      href: '/services/web-design',
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
      name: 'Inv Manager',
      type: 'ecommerce',
      details: {
        os: 'nextjs 14',
        host: 'vercel',
        kernel: 'react 18',
        manager: 'bun',
        memory: 'postgresql',
        packages: 'prisma, shadcn, lucide, zod, zustand, next-safe-action',
        languages: 'typescript, tailwind',
        status: 'stable',
      },
      description:
        'A simple inventory manager tool, that simulates how companies like shopify manage users, products orders and customers',
      links: {
        live: 'https://inventory-manager-zeta-six.vercel.app/',
        repo: 'https://github.com/hanascript/inventory-manager/',
      },
      images: [
        {
          src: '/images/inv-manager.png',
          alt: 'inv-manager',
        },
      ],
      animation: {
        R1: 1,
        R2: 2,
        K2: 5,
      },
    },
    {
      id: 2,
      name: 'visualizer',
      type: 'education',
      details: {
        os: 'NextJS 14',
        host: 'Vercel',
        kernel: 'React 18',
        manager: 'pnpm',
        memory: 'none',
        packages: 'shadcn, lucide, zustand',
        languages: 'typescript, tailwind',
        status: 'stable',
      },
      description: 'This application allows you to visualize, sorting algorithms in real time',
      links: {
        live: 'https://xvisualizer.vercel.app/',
        repo: 'https://github.com/hanascript/visualizer/',
      },
      images: [
        {
          src: '/images/visualizer.png',
          alt: 'visualizer',
        },
      ],
      animation: {
        R1: 6,
        R2: 5,
        K2: 5,
      },
    },
    {
      id: 3,
      name: 'Cashflowe',
      type: 'budgeting',
      details: {
        os: 'nextjs 14',
        host: 'vercel',
        kernel: 'react 18',
        manager: 'bun',
        memory: 'postgresql',
        packages: 'hono, drizzle, zod, zustand, plaid, tanstack/react-query',
        languages: 'typescript, tailwind',
        status: 'stable',
      },
      description: 'A budgeting tool that allows you to connect, your bank accounts and track your spending',
      links: {
        live: 'https://cashflowe.vercel.app/',
        repo: 'https://github.com/hanascript/cashflowe/',
      },
      images: [
        {
          src: '/images/cashflowe.png',
          alt: 'cashflowe',
        },
      ],
      animation: {
        R1: 1,
        R2: 2,
        K2: 5,
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
