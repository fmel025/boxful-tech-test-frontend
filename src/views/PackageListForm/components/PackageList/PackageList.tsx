import { PackageItem } from "@/interfaces/package-item.interface";
import { Button, Flex, Form } from "antd";
import PackageInputs from "../PackageInputs/PackageInputs";
import { DeleteOutlined } from "@ant-design/icons";

export default function PackageList({
  item,
  handleDelete,
}: {
  item: PackageItem;
  handleDelete: Function;
}) {
  const [form] = Form.useForm();
  return (
    <Form
      className="package-list"
      layout="vertical"
      form={form}
      initialValues={item}
    >
      <PackageInputs areDisabled={true} />
      <Flex justify="flex-end">
        <Button
          className="btn-delete"
          onClick={() => handleDelete()}
          size="middle"
        >
          <DeleteOutlined className="icon-delete" />
        </Button>
      </Flex>
    </Form>
  );
}
