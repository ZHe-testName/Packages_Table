import SinglePackageModal from "@/components/modals/SinglePackageModal/SinglePackageModal.vue";

import { MODAL_NAMES } from "../enums/components";
import type { IModal } from "../types/components/interfaces";

export const MODALS_CONFIG: IModal[] = [
  {
    name: MODAL_NAMES.SINGLE_PACKAGE,
    modal: SinglePackageModal,
  }
];