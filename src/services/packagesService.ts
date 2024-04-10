
import { errorHandledTryCatch } from "@/helpers";
import { API } from "@/api/api";
import type {
  IGetPackagesParams,
  IPackage,
  ISingleExpandPackage
} from "@/core/types/api";
import { ENDPOINTS } from "@/core/enums/api";

class PackagesService {
  static fetchPackages = async (params?: IGetPackagesParams) => 
    errorHandledTryCatch<IPackage[]>(() => API.get(
      ENDPOINTS.ALL_PACKAGES,
      {
        params: params || {},
      }
    ));

  static fetchGitHubPackage = async (packageName: string) => 
    errorHandledTryCatch<ISingleExpandPackage>(() => API.get(
      ENDPOINTS.GIT_HUB_PACKAGES + packageName
    ));

  static fetchNpmPackage = async (packageName: string) => 
    errorHandledTryCatch<ISingleExpandPackage>(() => API.get(
      ENDPOINTS.NPM_HUB_PACKAGES + packageName
    ));
};

export { PackagesService };