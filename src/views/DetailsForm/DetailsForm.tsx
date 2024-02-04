import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details.interface";
import { Form, Input, DatePicker, Flex, Button } from "antd";
import "./Details.css";
import { StateSelector } from "./components/StateSelector/StateSelector";
import { State } from "@/interfaces/state.interface";
import { fetchStates } from "@/services";
import { IndicationsInput } from "./components/IndicationsInput/IndicationsInput";
import { PersonalDataInputs } from "./components/PersonalDataInputs/PersonalDataInputs";
import { PhoneAndAddressInputs } from "./components/PhoneAndAddress/PhoneAndAddressInputs";
import { ArrowRightOutlined } from "@ant-design/icons";
import CollectionAndDate from "./components/CollectionAndDate/CollectionAndDate";

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
        const fetchedStates: State[] = await fetchStates();
        setStates(fetchedStates);
        const allCollectionPoints = fetchedStates.reduce(
          (accumulator: string[], state) => {
            return [...accumulator, ...state.collectionPoints];
          },
          []
        );

        // To avoid prop drilling (also Context could be used)
        sessionStorage.setItem(
          "collectionPoints",
          JSON.stringify(allCollectionPoints)
        );
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
        {states.length > 0 && <CollectionAndDate />}
        <PersonalDataInputs />
        <PhoneAndAddressInputs />
        {states.length > 0 && <StateSelector states={states} />}
        <IndicationsInput />
        <Flex justify="flex-end">
          <Button size="large" className="btn" type="primary" htmlType="submit">
            <span>Siguiente </span>
            <ArrowRightOutlined />
          </Button>
        </Flex>
      </Form>
    </>
  );
}
