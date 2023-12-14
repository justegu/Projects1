import axios from "axios";
import { ISpacexRocket } from "./types";

const httpClient = axios.create({
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class Api_instance {
  private SpacexRocketsBaseUrl: {
    rockets: string;
  };

  constructor() {
    const SpacexRocketsBaseUrl = "https://api.spacexdata.com/v3";

    this.SpacexRocketsBaseUrl = {
      rockets: SpacexRocketsBaseUrl + "/rockets",
    };
  }

  // SpacexRocketsBaseUrl
  public async getSpacexRockets(): Promise<ISpacexRocket[]> {
    const spacexRockets: ISpacexRocket[] = await httpClient.get(
      this.SpacexRocketsBaseUrl.rockets
    );

    return spacexRockets;
  }
}

export const API = new Api_instance();
