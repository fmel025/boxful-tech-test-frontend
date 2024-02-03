import { Layout, Divider } from "antd";
import { BoxfulLogo } from "../BoxfulLogo/BoxfulLogo";
import styles from "./MainHeader.module.css";

const { Header } = Layout;

export function MainHeader() {
  return (
    <Header className={styles.header}>
      <BoxfulLogo />
      <Divider className={styles.divider} type="vertical" />
    </Header>
  );
}
