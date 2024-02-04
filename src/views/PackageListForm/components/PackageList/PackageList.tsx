import { PackageItem } from "@/interfaces/package-item.interface";
import { Button, Flex, Form } from "antd";
import PackageInputs from "../PackageInputs/PackageInputs";

export default function PackageList({ item }: { item: PackageItem }) {
  const [form] = Form.useForm();
  return (
    <Form className="package-list" layout="vertical" form={form} initialValues={item}>
      <PackageInputs areDisabled={true} />
      <Flex justify="flex-end">
        <Button size="small">
          <span className="text-sm">Eliminar</span>
        </Button>
      </Flex>
    </Form>
  );
}
