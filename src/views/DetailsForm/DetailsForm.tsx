import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details.interface";
import { Form, Input, DatePicker, Flex, Button } from "antd";
import "./Details.css";
import { StateSelector } from "./components/StateSelector";
import { State } from "@/interfaces/state.interface";
import { fetchStates } from "@/services";
import { IndicationsInput } from "./components/IndicationsInput";
import { PersonalDataInputs } from "./components/PersonalDataInputs";
import { PhoneAndAddressInputs } from "./components/PhoneAndAddress/PhoneAndAddressInputs";
import { ArrowRightOutlined } from "@ant-design/icons";

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
        <PersonalDataInputs />
        <PhoneAndAddressInputs />
        {states.length > 0 && <StateSelector states={states} />}
        <IndicationsInput />
        <Flex justify="flex-end">
          <Button size="large" className="btn" type="primary" htmlType="submit">
            <span>Siguiente </span>
            <ArrowRightOutlined  />
          </Button>
        </Flex>
      </Form>
    </>
  );
}
