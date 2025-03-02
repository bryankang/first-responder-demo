import { Flex } from "@radix-ui/themes";
import { FC } from "react";
import { Details } from "./components/Details";
import { Map } from "./components/Map";
import { Sidebar } from "./components/Sidebar";
import styles from "./MapPage.module.css";

export type MapPageProps = {};

export const MapPage: FC<MapPageProps> = () => {
  return (
    <Flex
      flexGrow="1"
      direction="column"
      position="relative"
      align="stretch"
      className={styles.root}
    >
      <Map />
      <Sidebar />
      <Details />
    </Flex>
  );
};
