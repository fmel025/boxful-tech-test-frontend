"use client";

import { Layout } from "antd";
import { MainHeader } from "@/components";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";

const { Content } = Layout;

export default function Home() {
  const [form] = useForm();
  const [step, setStep] = useState<number>(1);

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
        </div>
        
      </Content>
    </Layout>
  );
}
