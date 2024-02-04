import { Form } from "antd";
import { CustomDatePicker } from "../CustomDatePicker/CustomDatePicker";
import moment from "moment";

export default function DatePickerSelector() {

  const disableDates = (current: moment.Moment) => {
    const today = moment();
    return current.isBefore(today);
  }

  return (
    <Form.Item
      name="date"
      label="📅 Fecha Programada"
      rules={[{ required: true, message: "" }]}
    >
      <CustomDatePicker
        style={{
          width: "100%",
        }}
        disabledDate={disableDates}
        size="large"
      />
    </Form.Item>
  );
}
