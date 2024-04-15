//Search package response interfaces

export interface IPackageScore {
  final: number;
  detail: {
    quality: number;
    popularity: number;
    maintenance: number;
  }
};

export interface IPackageUser {
  username: string;
  email: string;
};

export interface IPackageLinks {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
};

export interface IPackageObject {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: IPackageLinks;
  publisher: IPackageUser;
  maintainers: IPackageUser[];
};

export interface IPackage {
  package: IPackageObject;
  score: IPackageScore;
  searchScore: number;
};

export interface ISearchResponse {
  objects: IPackage[];
  total: number;
  time: string;
}

//Single package response interfaces

export interface IBuildOptions {
  name: string;
  formats: string[];
};

export interface ISinglePackageRepository {
  type: string;
  url: string;
};

export interface ISinglePackageDist {
  fileCount: number;
  unpackedSize: number;
};

export interface ISinglePackageAuthor {
  name: string;
};

export interface IMaintainer {
  name: string;
  email: string;
};

export interface ISinglePackageResponse {
  name: string;
  version: string;
  description: string;
  buildOptions: IBuildOptions;
  repository: ISinglePackageRepository;
  keywords: string[];
  author: ISinglePackageAuthor;
  homepage: string;
  dependencies: Object;
  _nodeVersion: string;
  _npmVersion: string;
  dist: ISinglePackageDist;
  maintainers: IMaintainer[];
}
