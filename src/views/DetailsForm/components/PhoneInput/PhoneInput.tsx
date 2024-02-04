import { Space, Select, Input, Form } from "antd";

const { Option } = Select;

export function PhoneInput() {
  return (
    <>
      <Form.Item
        label="Teléfono"
        name="phone"
        rules={[{ required: true, message: "" }]}
      >
        <Input
          size="large"
          placeholder="Ingrese un numero de telefono"
          addonBefore={
            <Select defaultValue="+503" disabled>
              <Option value="+503">🇸🇻</Option>
            </Select>
          }
        />
      </Form.Item>
    </>
  );
}
