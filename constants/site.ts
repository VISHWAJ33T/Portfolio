interface Author {
  name: string;
  url: string;
  avatar: string;
  email: string;
  linkedIn: string;
  github: {
    username: string;
    url: string;
  };
  twitter?: string;
}

interface Site {
  url: string;
  name: string;
  title: string;
  description: string;
  author: Author;
  keywords?: string[];
}

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://vishwaj33t.vercel.app'
    : 'http://localhost:3000';

export const SITE: Site = {
  url: BASE_URL,
  name: "Vishwajeet's portfolio",
  title: 'VISHWAJ33T',
  description:
    'Passionate Software engineer who focused on solving problems with digital products.',
  author: {
    name: 'Vishwajeet Yadav',
    url: 'https://vishwaj33t.vercel.appm',
    email: 'vishwajeety14122@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/vishwaj33t',
    github: {
      username: 'vishwaj33t',
      url: 'https://www.github.com/vishwaj33t',
    },
    avatar: '/media/me/profile.jpg',
    twitter: '@vishwajeet',
  },
  keywords: [
    'vishwajeet',
    'Vishwajeet Yadav',
    'developer',
    'portfolio',
    'developer portfolio website',
    'portfolio website',
    'full-stack',
    'back-end',
    'front-end',
    'software engineer',
  ],
};
