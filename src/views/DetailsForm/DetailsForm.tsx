import { useEffect, useState } from "react";
import { Details } from "../../interfaces/details.interface";
import { Form, Input, DatePicker } from "antd";
import "./Details.css";

export default function DetailsForm({
  initialData,
  onSubmit,
}: {
  initialData: Details;
  onSubmit: ((values: any) => void);
}) {
  return (
    <>
      <Form className="form" onFinish={onSubmit} initialValues={initialData}>
        a
      </Form>
    </>
  );
}
