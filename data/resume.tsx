import { Computer, FolderOpen, Wrench, Send } from 'lucide-react'

export const DATA = {
  name: 'Nathan Marcellous',
  initials: 'NM',
  url: '',
  location: 'Carlsbad, CA',
  locationLink: 'https://www.google.com/maps/place/carlsbad',
  description:
    'Hey, Im a software developer specializing in creating efficient, tailored solutions using Next.js. My approach is focused on understanding and addressing unique project needs to deliver practical, high-quality results. If your looking to develop or refine a project, feel free to get in touch — lets explore how my skills can support your vision.',
  summary: '',
  avatarUrl: '/me.png',
  skills: [
    {
      title: 'Languages',
      stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      stack: ['Next.js', 'React', 'TailwindCSS', 'Shadcn']
    },
    {
      title: 'Backend',
      stack: ['Node.js', 'Express.js', 'Hono.js', 'Next-Auth', 'JWT']
    },
    {
      title: 'Datebases',
      stack: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Prisma',
        'Drizzle',
        'Sequelize'
      ]
    },
    {
      title: 'Tools',
      stack: ['Git', 'Vscode', 'Figma']
    }
  ],
  links: [
    { href: '#about', icon: Computer, label: 'Index' },
    { href: '#skills', icon: Wrench, label: 'Skills' },
    { href: '#projects', icon: FolderOpen, label: 'Projects' },
    { href: '#contact', icon: Send, label: 'Contact' }
  ],
  navbar: [
    { href: '/projects', label: 'Projects' },
    { href: '/posts', label: 'Posts' }
  ],
  projects: [
    {
      coverImage: '/projects/cashflowe-desktop-1.png',
      title: 'Cashflowe',
      description:
        'A budget tracking application that allows user to connect their bank accounts and track their expenses and income and visualize their spending habits',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    },
    {
      coverImage: '/projects/inventory-manager-desktop-1.png',
      title: 'Inventory Manager',
      description:
        'An application CMS application that allows users to manage there products, categories, and customers and track their orders',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    },
    {
      coverImage: '/projects/inventory-manager-desktop-1.png',
      title: 'Inventory Manager',
      description:
        'An application CMS application that allows users to manage there products, categories, and customers and track their orders',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    }
  ]
} as const
