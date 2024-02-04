import { BASE_URL, STATES_ENDPOINT } from "@/constants/api";
import { State } from "@/interfaces/state.interface";

export const fetchStates = async (): Promise<State[]> => {
  try {
    const response = await fetch(`${BASE_URL}${STATES_ENDPOINT}`);
    const data: State[] = await response.json();
    return data;
  } catch (error) {
    console.log("Network error: ", error);
    return [];
  }
};
