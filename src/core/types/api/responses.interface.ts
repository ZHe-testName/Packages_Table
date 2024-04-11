import type { PACKAGE_TYPES } from "@/core/enums/api";

export interface IPackageVersion {
  version: string;
  links: {
    self: string;
    entrypoints?: string;
    stats: string;
  }
};

export interface IPackage {
  type: PACKAGE_TYPES;
  name: string;
  hits: number;
  bandwidth: number;
  prev: {  
    hits: number;
    bandwidth: number;
  }
  links: {
    self: string;
    versions: string;
  }
};

export interface ISingleExpandPackage {
  type: PACKAGE_TYPES;
  name: string;
  tags: Object;
  versions: IPackageVersion[];
  links: {
    stats: string;
  };
};
