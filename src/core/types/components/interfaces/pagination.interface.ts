export interface IPaginationItemProps {
  isActive: boolean;
  num: number;
};

// export interface IPaginationProps {
//   total: number;
//   current: number;
// };

export interface IPaginationEmits {
  (e: 'change-page', payload: number): void;
  (e: 'prev-page'): void;
  (e: 'next-page'): void;
};
