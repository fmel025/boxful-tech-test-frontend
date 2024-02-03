"use client";

import { Layout } from "antd";
import { MainHeader } from "@/components";

const { Header } = Layout;

export default function Home() {
  return (
    <Layout>
      <MainHeader />
    </Layout>
  );
}
