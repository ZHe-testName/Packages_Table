
import { errorHandledTryCatch } from "@/helpers";
import { API } from "@/api/api";
import type {
  IGetPackagesParams,
  ISearchResponse,
  ISinglePackageResponse
} from "@/core/types/api";
import { ENDPOINTS } from "@/core/enums/api";

class PackagesService {
  static fetchSinglePackage = async (packageName: string, version: string) => 
    errorHandledTryCatch<ISinglePackageResponse>(() => API.get(`${ENDPOINTS.SINGLE_PACKAGE}${packageName}/${version}`));

  static searchNpmPackage = async (params: IGetPackagesParams) => 
    errorHandledTryCatch<ISearchResponse>(() => API.get(ENDPOINTS.SEARCH_PACKAGES, {params}));
};

export { PackagesService };