import type { PACKAGE_TYPES } from "@/core/enums/api";

export interface ICheckboxProps {
  title: string;
  checkboxValue: PACKAGE_TYPES;
};

export interface ICheckboxEmits {
  (e: 'change', payload: PACKAGE_TYPES, isChecked: boolean): void;
};
