import { Flex } from "@radix-ui/themes";
import { FC } from "react";
import styles from "./MapPage.module.css";
import { Logo } from "~/components/Logo";
import { Menu } from "../RootPage/components/Menu";
import { Sidebar } from "./components/Sidebar";
import { Details } from "./components/Details";

export type MapPageProps = {};

export const MapPage: FC<MapPageProps> = () => {
  return (
    <Flex
      flexGrow="1"
      position="relative"
      align="stretch"
      className={styles.root}
    >
      <Sidebar />
      <Details />
    </Flex>
  );
};
