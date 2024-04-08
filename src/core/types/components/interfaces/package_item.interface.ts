import type { IPackage } from "@/core/types/api";

export interface IPackagesItemProps extends Pick<IPackage, 'name' | 'type' | 'bandwidth'> {};