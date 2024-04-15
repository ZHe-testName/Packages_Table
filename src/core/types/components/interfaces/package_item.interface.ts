import type { IPackageObject } from "@/core/types/api";

export interface IPackagesItemProps extends Pick<IPackageObject, 'name' | 'version'> {};