import mainLogo from '@/assets/imgs/png/paper-logo.jpg';

import magnifier from '@/assets/imgs/svg/magnifier.svg';
import github from '@/assets/imgs/svg/github.svg';
import npmLogo from '@/assets/imgs/svg/npm_logo.svg';
import githubLogo from '@/assets/imgs/svg/git_logo.svg';

import type { IImages } from '../types/general';
import { IMAGES_NAMES } from '../enums/general';

export const IMGS: Record<IMAGES_NAMES, IImages> = {
  [IMAGES_NAMES.MAIN_LOGO]: {
    src: mainLogo,
    alt: 'logo',
  },
  [IMAGES_NAMES.MAGNIFIER]: {
    src: magnifier,
    alt: 'magnifier',
  },
  [IMAGES_NAMES.GIT_HUB]: {
    src: github,
    alt: 'git',
  },
  [IMAGES_NAMES.GIT_HUB_LOGO]: {
    src: githubLogo,
    alt: 'git_logo',
  },
  [IMAGES_NAMES.NPM_LOGO]: {
    src: npmLogo,
    alt: 'npm_logo',
  },
}