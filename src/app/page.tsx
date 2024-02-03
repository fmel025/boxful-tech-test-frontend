"use client";

import { Layout } from "antd";
import { MainHeader } from "../components/MainHeader/MainHeader";

const { Header } = Layout;

export default function Home() {
  return (
    <Layout>
      <MainHeader />
    </Layout>
  );
}
