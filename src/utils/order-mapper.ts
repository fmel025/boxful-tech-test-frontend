import { Details } from "@/interfaces/details.interface";
import { Order } from "@/interfaces/order.interface";
import { PackageItem } from "@/interfaces/package-item.interface";
import moment from "moment";
import { Package } from "../interfaces/package.interface";

export const orderMapper = (details: Details, items: PackageItem[]): Order => {
  let date = details.date;

  if (moment.isMoment(date)) {
    date = date.toDate();
  }

  const orderDetails: Details = {
    ...details,
    date: date,
  };

  const orderPackages: Package[] = items.map((item) => {
    return {
      content: item.content,
      height: item.height,
      length: item.length,
      poundsWeight: item.poundsWeight,
      width: item.width,
    };
  });

  const order: Order = {
    ...orderDetails,
    packages: orderPackages,
  };

  return order;
};
