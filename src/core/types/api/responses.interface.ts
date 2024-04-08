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
