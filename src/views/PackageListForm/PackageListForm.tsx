import { Button, Flex, Form } from "antd";
import "./PackageListForm.css";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { PackageItem } from "@/interfaces/package-item.interface";
import { useState } from "react";
import PackageInputs from "./components/PackageInputs/PackageInputs";
import { v4 } from "uuid";
import { Package } from "@/interfaces/package.interface";
import PackageList from "./components/PackageList/PackageList";

export default function PackageListForm({
  initialPackages,
  onSubmit,
  onPrevStepClick: handlePreviousClick,
}: {
  initialPackages: PackageItem[];
  onSubmit: Function;
  onPrevStepClick: Function;
}) {
  const [form] = Form.useForm();

  const [packages, setPackages] = useState<PackageItem[]>(initialPackages);

  const addNewPackage = (data: Package) => {
    const packageAdded: PackageItem = {
      ...data,
      id: v4(),
    };
    form.resetFields();
    setPackages((packages) => [...packages, packageAdded]);
  };

  const handleGoPreviousPage = () => {
    handlePreviousClick(packages);
  };

  return (
    <div className="container">
      <p className="text-container">Agrega tus bultos</p>

      {/* Main form */}
      <Form
        layout="vertical"
        className="package-form"
        form={form}
        onFinish={addNewPackage}
      >
        <PackageInputs />
        <Flex justify="flex-end">
          <Button size="large" className="btn-add" htmlType="submit">
            <span className="text-sm">Agregar</span>
            <PlusOutlined />
          </Button>
        </Flex>
      </Form>

      {/* Package List */}
      {packages.map((item: PackageItem) => (
        <PackageList key={item.id} item={item} />
      ))}
      {/* Navigation buttons */}
      <Flex className="btn-group" justify="space-between">
        <Button
          size="large"
          className="btn-back"
          onClick={handleGoPreviousPage}
        >
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
