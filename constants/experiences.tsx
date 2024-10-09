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
      'Developed applications using Next.js, Node.js, and Prisma with MongoDB.',
      'Utilized Emotion CSS and Material UI for responsive and dynamic user interfaces.',
      'Integrated Prismic CMS for content management and created web3 wallet and smart contract functionalities',
      'Implemented Firebase Authentication, Firestore, NextAuth, JWT (with access and refresh tokens), and Passport with OAuth.',
      'Worked on advanced animations and 3D modeling with Three.js and GSAP.',
      'Deployed applications using Docker, Digital Ocean serverless functions, Doctl, and CI/CD pipelines with GitHub Actions.',
      'Engaged in AI image and audio generation using Model Labs API and Firebase GenKit AI',
      'Conducted interviews for intern positions, contributing to the recruitment process',
      'Implemented real-time communication with Socket.IO.',
    ],
  },
];
