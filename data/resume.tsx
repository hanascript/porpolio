import { Computer, FolderOpen, Wrench, Send } from 'lucide-react'

export const DATA = {
  name: 'Nathan Marcellous',
  initials: 'NM',
  url: '',
  location: 'Carlsbad, CA',
  locationLink: 'https://www.google.com/maps/place/carlsbad',
  description:
    'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.',
  summary:
    'At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).',
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
      coverImage: '/projects/inventory-manager-desktop-1.png',
      title: 'Inventory Manager',
      description: 'A desktop application for managing inventory.',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    },
    {
      coverImage: '/projects/inventory-manager-desktop-1.png',
      title: 'Inventory Manager',
      description: 'A desktop application for managing inventory.',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    },
    {
      coverImage: '/projects/inventory-manager-desktop-1.png',
      title: 'Inventory Manager',
      description: 'A desktop application for managing inventory.',
      techStack: ['Next.js', 'React', 'TailwindCSS', 'Prisma', 'PostgreSQL'],
      href: 'https://github.com/TabuHana/inventory-manager'
    }
  ]
} as const
