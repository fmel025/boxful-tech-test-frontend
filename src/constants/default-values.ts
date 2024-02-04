import { Details } from "@/interfaces/details.interface";
import { PackageItem } from "@/interfaces/package-item.interface";

export const initialDetails: Details = {
  city: "Ahuachapán",
  collectingAddress: "",
  date: new Date(),
  email: "",
  indications: "",
  lastnames: "",
  names: "",
  phone: "",
  recipientAddress: "",
  reference: "",
  state: "Ahuachapán",
};

export const initialPackagesData: PackageItem[] = [];
