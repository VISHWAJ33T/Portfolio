'use client';

import { motion } from 'framer-motion';

import {
  JavaScript,
  MongoDb,
  NextJS,
  PostgreSQL,
  ReactJS,
  TailwindCSS,
  TypeScript,
} from '@/components/shared/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface Stack {
  title: string;
  colorClass: string;
  icon: JSX.Element;
}

const stacks: Stack[] = [
  {
    title: 'TypeScript',
    colorClass: 'hover:text-[#3178C6]',
    icon: <TypeScript />,
  },
  {
    title: 'JavaScript',
    colorClass: 'hover:text-[#F7DF1E]',
    icon: <JavaScript />,
  },
  {
    title: 'Next.js',
    colorClass: 'hover:text-black dark:hover:text-white',
    icon: <NextJS />,
  },
  {
    title: 'React.js',
    colorClass: 'hover:text-[#61DAFB]',
    icon: <ReactJS />,
  },
  {
    title: 'Tailwind CSS',
    colorClass: 'hover:text-[#06B6D4]',
    icon: <TailwindCSS />,
  },
  {
    title: 'MongoDb',
    colorClass: 'hover:text-[#599636]',
    icon: <MongoDb />,
  },
  {
    title: 'PostgreSQL',
    colorClass: 'hover:text-[#4169E1]',
    icon: <PostgreSQL />,
  },
];

const CurrentTechStack = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <>
      <motion.p
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.4 }}
        className={cn('mb-2 text-sm text-muted-foreground')}
      >
        Tech stack and tools
      </motion.p>
      <motion.div
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.5, staggerChildren: 0.015 }}
        className={cn('flex flex-wrap gap-2')}
      >
        {stacks.map(({ title, colorClass, icon }) => (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <motion.div
                className={cn(
                  'size-6 text-muted-foreground transition duration-200',
                  colorClass,
                )}
                variants={animation}
              >
                {icon}
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>{title}</TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </>
  );
};

export default CurrentTechStack;
