import { BASE_URL, ORDERS_ENDPOINT } from "@/constants/api";
import { Order } from "@/interfaces/order.interface";

export const postOrder = async (order: Order) => {
  try {
    const response = await fetch(`${BASE_URL}${ORDERS_ENDPOINT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    console.log("Order posted successfully", data);

    return data;
  } catch (error) {
    console.log("Failed to post order: ", error);
  }
};
