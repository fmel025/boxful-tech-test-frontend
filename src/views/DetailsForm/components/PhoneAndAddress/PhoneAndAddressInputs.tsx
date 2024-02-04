import { FaLocationDot } from "react-icons/fa6";
import "./PhoneAndAddress.css";
import { PhoneInput } from "../PhoneInput/PhoneInput";
import { Col, Flex, Row } from "antd";
import { DestinationInput } from "../DestinationInput/DestinationInput";

export function PhoneAndAddressInputs() {
  return (
    <>
      <Row gutter={8}>
        <Col span={8}>
          <PhoneInput />
        </Col>
        <Col className="flex" span={2}>
          <FaLocationDot size="20px" className="icon" />
        </Col>
        <Col span={14}>
          <DestinationInput />
        </Col>
      </Row>
    </>
  );
}
