import { PackageItem } from "@/interfaces/package-item.interface";
import { Col, Form, Input, Row, InputNumber } from "antd";
import { IoMdCube } from "react-icons/io";
import styles from "./PackageInputs.module.css";

function PackageInputs() {
  return (
    <>
      <Row gutter={12}>
        <Col className={styles.flex} span={1}>
            <IoMdCube className={styles.icon} />
        </Col>
        <Col span={8}>
          <Row>
            <Col span={8}>
              <Form.Item label="Largo" name="length">
                <InputNumber size="large" suffix="cm" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Ancho" name="width">
                <InputNumber size="large" suffix="cm" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Alto" name="height">
                <InputNumber size="large" suffix="cm" />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Form.Item label="Peso en libras" name="poundsWeight">
            <InputNumber className={styles.full_width} size="large" suffix="lb" />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item label="Contenido" name="content">
            <Input size="large" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default PackageInputs;
