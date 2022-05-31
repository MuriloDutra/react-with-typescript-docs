import { Address } from "./Address";

export interface User {
    name: string;
    age: number;
    country: string;
    address: Address;
    admin: boolean;
  }