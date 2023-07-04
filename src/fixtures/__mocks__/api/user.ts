import { GetUserInfoResponse, LoginResponse } from '@/api/types/user';

export const mockUserAccessToken: LoginResponse = {
  accessToken: 'accessToken',
};

export const mockUserInfo: GetUserInfoResponse = {
  id: 'userId',
  name: '진우팍',
};
