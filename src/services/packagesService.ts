// import { errorHandledTryCatch } from "@/helpers";
import { API } from "@/api/api";
// import type {
//   IAllContainersBody,
//   IContainerDataBody,
//   IContainerDataResponse,
//   IContainersListResponse,
//   ISetContainerParamBody
// } from "@/core/types/api/interfaces";
// import { ENDPOINTS } from "@/core/types/api/enums";

class packagesService {
  // static fetchAllContainers = async (body: IAllContainersBody) => 
  //   errorHandledTryCatch<IContainersListResponse>(() => API.post(
  //     ENDPOINTS.ALL_CONTAINERS_DATA, 
  //     { req: JSON.stringify(body) }
  //   ));

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

export { packagesService };