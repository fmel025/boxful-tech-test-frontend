import { Form, Input, Select, Row, Col } from "antd";
import { State } from "../../../../interfaces/state.interface";
import { useState } from "react";

export function StateSelector({ states }: { states: State[] }) {
  const [cities, setCities] = useState<string[]>(states[0].cities);

  const handleStateChange = (stateSelection: string) => {
    const selectedState = states.find((state) => state.name === stateSelection);

    if (!selectedState) return;

    // Update the cities after the selected state has changed
    setCities(selectedState.cities);
  };

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item
          name="state"
          label="Departamento"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            defaultActiveFirstOption={true}
            onChange={handleStateChange}
            options={states.map((state) => ({
              label: state.name,
              value: state.name,
            }))}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="city"
          label="Municipio"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            defaultValue={cities[0]}
            options={cities.map((city) => ({
              label: city,
              value: city,
            }))}
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="reference"
          label="Punto de Referencia"
          rules={[{ required: true, message: "" }]}
        >
          <Input />
        </Form.Item>
      </Col>
    </Row>
  );
}
