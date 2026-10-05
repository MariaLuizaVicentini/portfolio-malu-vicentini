import type { ContactChannel } from '@/types';
import { SITE } from './site';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    subtitle: SITE.linkedinHandle,
    href: SITE.linkedin,
    arrow: '↗',
  },
  {
    id: 'github',
    title: 'GitHub',
    subtitle: SITE.githubHandle,
    href: SITE.github,
    arrow: '↗',
  },
  {
    id: 'email',
    title: 'E-mail',
    subtitle: SITE.email,
    href: `mailto:${SITE.email}`,
    arrow: '↗',
  },
  {
    id: 'cv',
    title: 'Currículo',
    subtitle: 'PDF · Download',
    href: SITE.resume,
    arrow: '↓',
  },
];
