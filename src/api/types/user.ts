export type LoginRequest = {
  email: string;
  password: string;
}

export type LoginResponse = {
  accessToken: string;
}

export type GetUserInfoResponse = {
  id: string;
  name: string;
};

export type SignupRequest = {
  email: string;
  password: string;
  name: string;
}

export type SignupResponse = LoginResponse;
