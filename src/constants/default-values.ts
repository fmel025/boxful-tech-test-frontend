import { Details } from "@/interfaces/details.interface";
import { PackageItem } from "@/interfaces/package-item.interface";

export const initialDetails: Details = {
  city: "",
  collectingAddress: "",
  date: new Date(),
  email: "",
  indications: "",
  lastnames: "",
  names: "",
  phone: "+ 503 ",
  recipientAddress: "",
  reference: "",
  state: "",
};

export const initialPackagesData: PackageItem[] = [];
