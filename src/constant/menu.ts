import { BotIcon, StarIcon, VideoIcon } from 'lucide-react';

const primarySection = [
  {
    icon: VideoIcon,
    label: 'Meetings',
    href: '/meetings',
  },
  {
    icon: BotIcon,
    label: 'Agents',
    href: '/agents',
  },
];

const secondSection = [
  {
    icon: StarIcon,
    label: 'Upgrade',
    href: '/upgrade',
  },
];

export { primarySection, secondSection };
