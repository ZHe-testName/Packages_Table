import mainLogo from '@/assets/imgs/png/paper-logo.jpg';
import magnifier from '@/assets/imgs/svg/magnifier.svg';

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
}