import axios from "axios";

interface AuthParams {
  email: string;
  password: string;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/auth",
});

class AuthClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  register = (data: AuthParams) => {
    return axiosInstance
      .post<AuthParams>(this.endpoint, data)
      .then((res) => res.data);
  };
}

export default AuthClient;
