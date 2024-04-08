
import { errorHandledTryCatch } from "@/helpers";
import { API } from "@/api/api";
import type {
//   IAllContainersBody,
//   IContainerDataBody,
//   IContainerDataResponse,
//   IContainersListResponse,
IGetPackagesBody,
IPackage
} from "@/core/types/api";
import { ENDPOINTS } from "@/core/enums/api";

class PackagesService {
  static fetchPackages = async (body?: IGetPackagesBody) => 
    errorHandledTryCatch<IPackage[]>(() => API.get(
      ENDPOINTS.ALL_PACKAGES,
      {
        params: body || {},
      }
    ));

  // static fetchContainerData = async (body: IContainerDataBody) => 
  //   errorHandledTryCatch<IContainerDataResponse>(() => API.post(
  //     ENDPOINTS.CONTAINER_DATA,
  //     { req: JSON.stringify(body) }
  //   ));

  // static sendContainerParams = async (body: ISetContainerParamBody) => 
  //   errorHandledTryCatch<IContainerDataResponse>(() => API.post(
  //     ENDPOINTS.SET_CONTAINER_PARAMS,
  //     { req: JSON.stringify(body) }
  //   ));
};

export { PackagesService };