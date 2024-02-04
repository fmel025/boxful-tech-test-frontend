import { Details } from "./details.interface";
import { Package } from "./package.interface";

export interface Order extends Details {
  packages: Package[];
}
