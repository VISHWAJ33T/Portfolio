import { Document, Email, GitHub, LinkedIn } from '@/components/shared/icons';
import Link from '@/components/shared/link';
import { Button } from '@/components/ui/button';
import { ROUTES, SITE } from '@/constants';
import { cn } from '@/lib/utils';

import TechStacks from './tech-stacks';

const Biography = () => {
  return (
    <>
      <p>Hi there! Welcome to my digital space on the web. 👋</p>
      <p>
        I'm <strong>Vishwajeet Yadav</strong>, a Software Developer passionate
        about building innovative and scalable digital solutions that create
        real-world impact. Currently, I work remotely at{' '}
        <Link href="https://themoondevs.com">TheMoonDevs</Link>, where I design
        and develop full-stack applications while integrating advanced
        technologies like AI and Web3.
      </p>
      <p>
        With hands-on experience in programming languages such as{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link>,{' '}
        <Link href="https://www.javascript.com/">JavaScript</Link>, and
        frameworks like <Link href="https://reactjs.org/">React</Link> and{' '}
        <Link href="https://nextjs.org/">Next.js</Link>, I craft efficient,
        user-centric software systems. My backend expertise includes
        technologies like <Link href="https://nodejs.org/">Node.js</Link>,{' '}
        <Link href="https://www.prisma.io/">Prisma ORM</Link>, and{' '}
        <Link href="https://graphql.org/">GraphQL</Link>, enabling seamless
        communication between systems and ensuring top-notch performance.
      </p>
      <p>
        At TheMoonDevs, I've engineered projects involving real-time
        communication, AI-powered features, and smart contract integrations. By
        automating workflows, optimizing performance, and delivering technical
        SEO enhancements, I help organizations achieve their goals through
        tailored solutions.
      </p>
      <p>
        Outside of coding, I'm an avid enthusiast of{' '}
        <strong>video games</strong> 🎮, <strong>anime</strong> 📺, and{' '}
        <strong>football</strong> ⚽. These hobbies not only keep me energized
        but also inspire creativity and balance in my life. I believe a bug-free
        mind leads to bug-free code!
      </p>
      <p>
        If you'd like to learn more about my professional background, feel free
        to check out{' '}
      </p>
      <Link href={ROUTES.resume} className={cn('text-inherit')}>
        <Button variant="shadow" className={cn('gap-x-1')}>
          <Document /> My Resume
        </Button>
      </Link>

      <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>Tech Stack</h2>
      <TechStacks />

      <h2 className={cn('font-cal text-2xl', 'lg:text-3xl')}>Let's Connect</h2>
      <p>
        Questions or collaborations? Reach out to me at{' '}
        <Link
          href={`mailto:${SITE.author.email}?subject=Hi Vishwajeet!`}
          className={cn('underline')}
        >
          {SITE.author.email}
        </Link>{' '}
        or connect through social media. Let's build something amazing together!
      </p>
      <div className={cn('my-2 flex items-center gap-4')}>
        <Link
          href={SITE.author.github.url}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <GitHub className={cn('size-5')} />
        </Link>
        <Link
          href={SITE.author.linkedIn}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <LinkedIn className={cn('size-5')} />
        </Link>
        <Link
          href={`mailto:${SITE.author.email}?subject=Hi Vishwajeet!`}
          className={cn(
            'text-muted-foreground transition-colors duration-200',
            'hover:text-foreground',
          )}
        >
          <Email className={cn('size-5')} />
        </Link>
      </div>
    </>
  );
};

export default Biography;
