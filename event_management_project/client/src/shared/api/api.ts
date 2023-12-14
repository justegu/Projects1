import { ApiMethods, ApiMethod, IUser } from "./types.js";
import axios from "axios";

const client = async (url: string, method: ApiMethod, data?: any) => {
  try {
    const response = await axios({
      url,
      method,
      data,
      ...(method === ApiMethods.POST && {
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify(data),
      }),
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default class API {
  private static baseUrl: string = "http://localhost:5000";

  public static getUsers = async () => {
    return await client(API.baseUrl + "/api/users", ApiMethods.GET);
  };

  public static postUser = async (user: IUser) => {
    return await client(API.baseUrl + "/api/users", ApiMethods.POST, user);
  };

  public static updateUser = async (id: string, editedUser: IUser) => {
    const response = await client(
      API.baseUrl + "/api/users/" + id,
      ApiMethods.PUT,
      editedUser
    );
    return response.data;
  };

  public static deleteUser = async (id: string) => {
    return await client(API.baseUrl + "/api/users/" + id, ApiMethods.DELETE);
  };
}
