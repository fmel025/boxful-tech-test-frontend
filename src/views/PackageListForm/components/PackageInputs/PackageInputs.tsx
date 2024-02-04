import { PackageItem } from "@/interfaces/package-item.interface";
import { Col, Form, Input, Row, InputNumber } from "antd";
import { IoMdCube } from "react-icons/io";
import styles from "./PackageInputs.module.css";

function PackageInputs({ areDisabled = false}) {
  return (
    <>
      <Row gutter={12}>
        <Col className={styles.flex} span={1}>
          <IoMdCube className={styles.icon} />
        </Col>
        <Col span={8}>
          <Row>
            <Col span={8}>
              <Form.Item
                label="Largo"
                name="length"
                rules={[{ required: true, message: "" }]}
              >
                <InputNumber min={1} size="large" suffix="cm" disabled={areDisabled} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Ancho"
                name="width"
                rules={[{ required: true, message: "" }]}
              >
                <InputNumber min={1} size="large" suffix="cm" disabled={areDisabled} />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Alto"
                name="height"
                rules={[{ required: true, message: "" }]}
              >
                <InputNumber min={1} size="large" suffix="cm" disabled={areDisabled}/>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Form.Item
            label="Peso en libras"
            name="poundsWeight"
            rules={[{ required: true, message: "" }]}
          >
            <InputNumber
              min={1}
              className={styles.full_width}
              size="large"
              suffix="lb"
              disabled={areDisabled}
            />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            label="Contenido"
            name="content"
            rules={[{ required: true, message: "" }]}
          >
            <Input min={1} size="large" disabled={areDisabled} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default PackageInputs;
