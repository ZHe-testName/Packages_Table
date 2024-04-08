import type { PACKAGE_TYPES, PERIOD_TYPES, SORT_BY } from "@/core/enums/api";

export interface IGetPackagesBody {
  by?: SORT_BY;
  type?: PACKAGE_TYPES;
  period?: PERIOD_TYPES;
  limit?: number;
  page?: number;
};
