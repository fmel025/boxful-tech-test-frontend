import { useSessionStorage } from "@uidotdev/usehooks";
import { Form, Input, Select } from "antd";

export default function CollectionAddressSelector() {
  const [collectingAddresses, setCollectingAdresses] = useSessionStorage<
    string[]
  >("collectionPoints", []);

  return (
    <>
      {collectingAddresses.length > 0 && (
        <Form.Item
          name="collectingAddress"
          label="📍 Dirección de recolección"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            defaultActiveFirstOption={true}
            size="large"
            options={collectingAddresses.map((address) => ({
              label: address,
              value: address,
            }))}
          />
        </Form.Item>
      )}
    </>
  );
}
