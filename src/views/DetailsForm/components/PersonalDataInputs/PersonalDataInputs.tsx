import { Col, Form, Input, Row } from "antd";

export function PersonalDataInputs() {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Form.Item
          name="names"
          label="Nombres"
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder="Ingrese sus nombres" size="large" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="lastnames"
          label="Apellidos"
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder="Ingrese sus apellidos" size="large" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          name="email"
          label="Correo Electrónico"
          rules={[{ required: true, message: "" }]}
        >
          <Input placeholder="Ingrese su email" size="large" />
        </Form.Item>
      </Col>
    </Row>
  );
}
