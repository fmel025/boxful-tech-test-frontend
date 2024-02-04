"use client";

import { Layout } from "antd";
import { MainHeader } from "@/components";
import { useState } from "react";
import DetailsForm from "@/views/DetailsForm/DetailsForm";
import PackageListForm from "@/views/DetailsForm/PackageListForm";

const { Content } = Layout;

export default function Home() {
  const [step, setStep] = useState<number>(1);
  const [details, setDetails] = useState();

  const onNextStepClick = (details) => {
    setDetails(details);
    setStep((step) => step + 1);
  };

  const onPrevStepClick = () => {
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
          {step === 2 && <PackageListForm />}
        </div>
      </Content>
    </Layout>
  );
}
