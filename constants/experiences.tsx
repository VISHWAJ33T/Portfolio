import {
  JavaScript,
  NextJS,
  ReactJS,
  TailwindCSS,
  TypeScript,
} from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import type { Experience } from '@/types/experience';

export const EXPERIENCES: Experience[] = [
  {
    company: {
      name: 'TheMoonDevs',
      logo: '/media/resume/themoondevs.png',
      url: 'https://themoondevs.com',
      location: 'Benglore, India',
      workplaceType: 'Remote',
      jobType: 'Full-time',
    },
    role: 'Full-stack Developer',
    startDate: '2024-03',
    endDate: null,
    stacks: [
      {
        name: 'Next.js',
        icon: <NextJS className={cn('size-5 fill-black', 'dark:fill-white')} />,
      },
      {
        name: 'React.js',
        icon: <ReactJS className={cn('size-5 fill-[#61DAFB]')} />,
      },
      {
        name: 'TypeScript',
        icon: <TypeScript className={cn('size-5 fill-[#3178C6]')} />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScript className={cn('size-5 fill-[#F7DF1E]')} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCSS className={cn('size-5 fill-[#06B6D4]')} />,
      },
    ],
    accomplishments: [
      'Built full-stack applications using Next.js, Node.js, and Prisma with MongoDB, integrating Prismic CMS and responsive interfaces with Material UI and Emotion CSS.',
      'Automated workflows with AWS SES, Slackbot automations, and Dockerized microservices for seamless deployment on DigitalOcean using CI/CD pipelines with Jenkins and GitHub Actions.',
      'Engineered real-time communication (Socket.IO), advanced animations (Three.js, GSAP), and deployed web3 wallets with smart contract functionalities.',
      'Delivered AI-powered features such as Realtime Image and audio generation using Model Labs API, Gemni API and Firebase GenKit AI.',
      'Developed web scraping pipelines with Puppeteer to gather articles from HackerNews, Medium, and other sources.',
    ],
  },
];
