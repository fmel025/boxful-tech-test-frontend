import { Col, Row } from "antd";
import CollectionAddressSelector from "../CollectionAddressSelector/CollectionAddressSelector";
import DatePickerSelector from "../DatePickerSelector/DatePickerSelector";

export default function CollectionAndDate() {
  return (
    <Row gutter={16}>
      <Col span={16}>
        <CollectionAddressSelector />
      </Col>
      <Col span={8}>
        <DatePickerSelector />
      </Col>
    </Row>
  );
}
