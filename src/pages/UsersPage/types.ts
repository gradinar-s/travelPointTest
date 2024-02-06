export interface UserCompany {
  bs: string;
  catchPhrase: string;
  name: string;
}
export interface UserAddress {
  city: string;
  geo: { lat: string; lng: string };
  street: string;
  suite: string;
  zipcode: string;
}
export interface User {
  id: number;
  name: string;
  phone: number;
  username: string;
  website: string;
  email: string;
  company: UserCompany;
  address: UserAddress;
}
