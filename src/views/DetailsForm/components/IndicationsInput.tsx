import { Form, Input } from "antd";
import React from "react";

export function IndicationsInput() {
  return (
    <Form.Item
      name="indications"
      label="Indicaciones"
      rules={[{ required: true, message: "" }]}
    >
      <Input placeholder="Ingrese las indicaciones para el momento de entrega" />
    </Form.Item>
  );
}
