export interface IPackageVersion {
  version: string;
  links: {
    self: string;
    entrypoints?: string;
    stats: string;
  }
};

export interface IPackage {
  type: string;
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
  type: string;
  name: string;
  tags: Object;
  versions: IPackageVersion[];
  links: {
    stats: string;
  };
};
