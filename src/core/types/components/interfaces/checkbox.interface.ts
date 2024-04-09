export interface ICheckboxProps {
  title: string;
  checkboxValue: string;
};

export interface ICheckboxEmits {
  (e: 'change', payload: string): void;
};
