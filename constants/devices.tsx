import { Laptop, Smartphone } from '@/components/shared/icons';
import { cn } from '@/lib/utils';

export const PAIR_DEVICES: Record<
  string,
  { icon: React.ReactNode; model: string; id: string }
> = {
  Computer: {
    icon: <Laptop className={cn('size-6')} />,
    model: 'Acer Aspire 7',
    id: 'vishwajeet-pc',
  },
  Smartphone: {
    icon: <Smartphone className={cn('size-6')} />,
    model: 'Redmi 9',
    id: 'vishwajeet-phone',
  },
};
