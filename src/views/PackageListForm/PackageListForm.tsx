import { Button, Flex, Form } from "antd";
import "./PackageListForm.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { PackageItem } from "@/interfaces/package-item.interface";
import { useState } from "react";
import PackageInputs from "./components/PackageInputs/PackageInputs";

export default function PackageListForm({
  initialPackages,
  onSubmit,
  onPrevStepClick
}: {
  initialPackages: PackageItem[],
  onSubmit: Function,
  onPrevStepClick: Function
}) {
  const [form] = Form.useForm();


  const [packages, setPackages] = useState<PackageItem[]>(initialPackages);

  const handleOnFinish = (data: object) => {
    console.log(packages);
    console.log(data);
  };

  const handleGoPreviousPage = () => {
    onPrevStepClick(packages);
  }

  return (
    <div className="container">
      <p className="text-container">Agrega tus bultos</p>
      <Form layout="vertical" className="package-form" form={form} onFinish={handleOnFinish}>
        <PackageInputs />
      </Form>
      
      {/* Navigation buttons */}
      <Flex className="btn-group" justify="space-between">
        <Button size="large" className="btn-back" onClick={handleGoPreviousPage}>
          <ArrowLeftOutlined />
          <span>Anterior </span>
        </Button>
        <Button size="large" className="btn-send" type="primary">
          <span>Enviar </span>
          <ArrowRightOutlined />
        </Button>
      </Flex>
    </div>
  );
}
