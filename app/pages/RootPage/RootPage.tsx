import { Flex, Theme } from "@radix-ui/themes";
import { FC } from "react";
import styles from "./RootPage.module.css";
import { Menu } from "./components/Menu";

export type RootPageProps = {
  children: React.ReactNode;
};

export const RootPage: FC<RootPageProps> = ({ children }) => {
  return (
    <Theme accentColor="indigo" appearance="dark">
      <Flex align="stretch" className={styles.root}>
        <Menu />
        <Flex flexGrow="1" direction="column">
          {children}
        </Flex>
      </Flex>
    </Theme>
  );
};
