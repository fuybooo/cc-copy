export class MainData {
  userData: UserData;
  menuData: Array<MenuData>;
}
export class UserData {
  username: string;
  userAvatar: string;
  mobilePhone: string;
  email: string;
  positions: string;
}
export class MenuData {
  id: string;
  parentId: string;
  name: string;
  keyword: string;
  icon: string;
  isExpend?: boolean;
  url?: string;
  children?: Array<MenuData>;
}
