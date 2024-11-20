export type RootStackTypes = {
  Home: undefined;
  Test: undefined;
  Tabs: undefined;
  Contacts: undefined;
};

export type AuthContextType = {
  isLoggedIn: boolean;
};

export type contactType = {
  name: string;
  phone: string;
  work?: string;
  home?: string;
  image?: string;
  id: string;
};
