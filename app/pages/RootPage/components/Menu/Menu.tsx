import { Avatar, Flex } from "@radix-ui/themes";
import { FC } from "react";
import { Logo } from "~/components/Logo";
import styles from "./Menu.module.css";
import avatar from "./avatar.jpeg";
import { MenuItem } from "./components/MenuItem";
import { MapTrifold } from "@phosphor-icons/react/MapTrifold";
import { EnvelopeSimple } from "@phosphor-icons/react/EnvelopeSimple";
import { Users } from "@phosphor-icons/react/Users";
import { Butterfly } from "@phosphor-icons/react/Butterfly";

export type MenuProps = {};

export const Menu: FC<MenuProps> = () => {
  return (
    <Flex
      direction="column"
      align="center"
      gap="2"
      pt="2"
      pb="0"
      px="2"
      className={styles.menu}
    >
      <Logo />
      <div className={styles.divider} />

      <Flex
        flexGrow="1"
        direction="column"
        align="center"
        justify="between"
        gap="2"
      >
        <Flex direction="column" align="center" gap="1">
          <MenuItem icon={MapTrifold} label="Map" href="/" />
          <MenuItem icon={EnvelopeSimple} label="Inbox" href="/inbox" />
          <MenuItem icon={Users} label="Users" href="/users" />
          <MenuItem icon={Butterfly} label="Butterly" href="/butterfly" />
        </Flex>
        <Flex p="2">
          <Avatar src={avatar} fallback="B" size="2" />
        </Flex>
      </Flex>
    </Flex>
  );
};
