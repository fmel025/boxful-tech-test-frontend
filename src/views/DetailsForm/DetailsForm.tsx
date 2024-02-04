import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details.interface";
import { Form, Input, DatePicker } from "antd";
import "./Details.css";
import { StateSelector } from "./components/StateSelector";
import { State } from "@/interfaces/state.interface";
import { fetchStates } from "@/services";
import { IndicationsInput } from "./components/IndicationsInput";

export default function DetailsForm({
  initialData,
  onSubmit,
}: {
  initialData: Details;
  onSubmit: (values: any) => void;
}) {
  const [states, setStates] = useState<State[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const states: State[] = await fetchStates();
        setStates(states);
      } catch (error) {
        console.log("Network error: ", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Form
        layout="vertical"
        className="form"
        onFinish={onSubmit}
        initialValues={initialData}
      >
        {states.length > 0 && <StateSelector states={states} />}
        <IndicationsInput />
      </Form>
    </>
  );
}
