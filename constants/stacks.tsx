import {
  Firebase,
  Git,
  JavaScript,
  Jest,
  Markdown,
  MongoDb,
  NextJS,
  NodeJs,
  PostgreSQL,
  Prisma,
  ReactJS,
  Redis,
  Supabase,
  TailwindCSS,
  TypeScript,
  Vercel,
} from '@/components/shared/icons';
import { cn } from '@/lib/utils';
import type { Stack } from '@/types/stack';

export const STACKS: Stack = {
  TypeScript: <TypeScript className={cn('size-4 fill-[#3178C6]')} />,
  JavaScript: <JavaScript className={cn('size-4 fill-[#F7DF1E]')} />,
  'Next.js': <NextJS className={cn('size-4 fill-black', 'dark:fill-white')} />,
  'React.js': <ReactJS className={cn('size-4 fill-[#61DAFB]')} />,
  'Tailwind CSS': <TailwindCSS className={cn('size-4 fill-[#06B6D4]')} />,
  Markdown: <Markdown className={cn('size-4 fill-black', 'dark:fill-white')} />,
  PostgreSQL: <PostgreSQL className={cn('size-4 fill-[#4169E1]')} />,
  Redis: <Redis className={cn('size-4 fill-[#FF4438]')} />,
  Prisma: (
    <Prisma className={cn('size-4 fill-[##2D3748]', 'dark:fill-white')} />
  ),
  Jest: <Jest className={cn('size-4 fill-[#C21325]')} />,
  Git: <Git className={cn('size-4 fill-[#F05032]')} />,
  Firebase: <Firebase className={cn('size-4 fill-[#FFCA28]')} />,
  Supabase: <Supabase className={cn('size-4 fill-[#3FCF8E]')} />,
  MongoDb: <MongoDb className={cn('size-4 fill-[#599636]')} />,
  NodeJs: <NodeJs className={cn('size-4 fill-[#68A063]')} />,
  Vercel: <Vercel className={cn('size-4 fill-black', 'dark:fill-white')} />,
};
