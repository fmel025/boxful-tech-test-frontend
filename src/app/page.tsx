"use client";

import { Layout } from "antd";
import { MainHeader } from "@/components";
import { useEffect, useState } from "react";
import DetailsForm from "@/views/DetailsForm/DetailsForm";
import PackageListForm from "@/views/PackageListForm/PackageListForm";
import { Details } from "@/interfaces/details.interface";
import { initialDetails } from "@/constants/default-values";
import { PackageItem } from "@/interfaces/package-item.interface";
import toast from "react-hot-toast";
import { Order } from "@/interfaces/order.interface";
import { orderMapper } from "@/utils/order-mapper";
import { postOrder } from "@/services/orderService";

const { Content } = Layout;

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [details, setDetails] = useState<Details>(initialDetails);
  const [packages, setPackages] = useState<PackageItem[]>([]);

  const onNextStepClick = (values: object) => {
    console.log(values);
    setDetails((details) => ({ ...details, ...values }));
    setStep((step) => step + 1);
  };

  const onPrevStepClick = (packages: PackageItem[]) => {
    setPackages([...packages]);
    setStep((step) => step - 1);
  };

  const handleSubmit = async (packages: PackageItem[]) => {
    if (packages.length === 0)
      return toast.error("Debes agregar al menos un paquete");

    const order: Order = orderMapper(details, packages);

    try {
      await postOrder(order);
      setDetails(initialDetails);
      setPackages([]);
      setStep((step) => step - 1);
      toast.success("La orden se envio exitosamente!");
    } catch (error) {
      toast.error("Network error");
      console.log(error);
    }
  };

  return (
    <Layout>
      <MainHeader />
      <Content style={{ margin: "40px auto", width: "75%" }}>
        <div>
          <h2 className="title">Crea una orden</h2>
          <p className="title-text">
            Dale una ventaja competitiva a tu negocio con entregas el mismo día
            (Área Metropolitana) y el día siguiente a nivel nacional.
          </p>
          {step === 1 && (
            <DetailsForm initialData={details} onSubmit={onNextStepClick} />
          )}
          {step === 2 && (
            <PackageListForm
              initialPackages={packages}
              onSubmit={handleSubmit}
              onPrevStepClick={onPrevStepClick}
            />
          )}
        </div>
      </Content>
    </Layout>
  );
}
