import { Details } from "@/interfaces/details.interface";
import { PackageItem } from "@/interfaces/package-item.interface";
import moment from "moment";

export const initialDetails: Details = {
  city: "",
  collectingAddress: "",
  email: "",
  indications: "",
  lastnames: "",
  names: "",
  phone: "+ 503 ",
  recipientAddress: "",
  reference: "",
  state: "",
  date: "",
};

export const initialPackagesData: PackageItem[] = [];
