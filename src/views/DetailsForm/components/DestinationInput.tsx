import { Form, Input } from "antd";
import React from "react";

export function DestinationInput() {
  return (
    <Form.Item
      label="Direccion del destinatario"
      name="recipientAddress"
      rules={[{ required: true, message: "" }]}
    >
      <Input size="large" placeholder="Ingrese la direccion del destinatario" />
    </Form.Item>
  );
}
