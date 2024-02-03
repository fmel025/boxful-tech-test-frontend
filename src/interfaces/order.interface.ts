import { Package } from "./package.interface";

export interface Order {
  collectingAddress: string;
  date: Date;
  names: string;
  lastnames: string;
  email: string;
  phone: string;
  recipientAddress: string;
  state: string;
  city: string;
  reference: string;
  indications: string;
  packages: Package[];
}