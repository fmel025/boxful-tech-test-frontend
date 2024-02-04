import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details.interface";
import { Form, Input, DatePicker, Flex, Button } from "antd";
import "./Details.css";
import { StateSelector } from "./components/StateSelector";
import { State } from "@/interfaces/state.interface";
import { fetchStates } from "@/services";
import { IndicationsInput } from "./components/IndicationsInput";
import { PersonalDataInputs } from "./components/PersonalDataInputs";

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
        onFinish={(data) => console.log(data)}
        initialValues={initialData}
      >
        <PersonalDataInputs/> 
        {states.length > 0 && <StateSelector states={states} />}
        <IndicationsInput />
        <Flex justify="flex-end">
          <Button type="primary" htmlType="submit">Siguiente</ Button>
        </Flex>
      </Form>
    </>
  );
}
