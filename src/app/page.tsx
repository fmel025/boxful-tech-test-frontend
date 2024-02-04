"use client";

import { Layout } from "antd";
import { MainHeader } from "@/components";
import { useEffect, useState } from "react";
import DetailsForm from "@/views/DetailsForm/DetailsForm";
import PackageListForm from "@/views/PackageListForm/PackageListForm";
import { Details } from "@/interfaces/details.interface";
import { initialDetails } from "@/constants/default-values";
import { PackageItem } from "@/interfaces/package-item.interface";

const { Content } = Layout;

export default function Home() {
  const [step, setStep] = useState<number>(2);
  const [details, setDetails] = useState<Details>(initialDetails);
  const [packages, setPackages] = useState<PackageItem[]>([]);

  // For debugging purposes
  // useEffect(() => {
  //   console.log(details);
  // }, [details]);

  const onNextStepClick = (values: object) => {
    console.log(values);
    setDetails((details) => ({ ...details, ...values }));
    setStep((step) => step + 1);
  };

  const onPrevStepClick = (packages: PackageItem[]) => {
    setPackages([...packages]);
    setStep((step) => step - 1);
  };

  const handleSubmit = (packages: PackageItem[]) => {
    setStep((step) => step - 1);
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
