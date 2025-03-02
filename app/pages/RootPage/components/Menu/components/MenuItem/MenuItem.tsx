import { Flex, Reset, Tooltip } from "@radix-ui/themes";
import { FC } from "react";
import { Icon } from "@phosphor-icons/react";
import styles from "./MenuItem.module.css";
import clsx from "clsx";
import { NavLink } from "@remix-run/react";

export type MenuItemProps = {
  icon: Icon;
  href: string;
  label: string;
};

export const MenuItem: FC<MenuItemProps> = ({ icon, href, label }) => {
  const Icon = icon;
  return (
    <Tooltip content={label} side="right" align="center" sideOffset={4}>
      <Reset>
        <NavLink to={href} end={href === "/"}>
          {({ isActive }) => (
            <Flex
              align="center"
              justify="center"
              className={clsx(styles.root, isActive && styles.rootActive)}
            >
              <Icon size={20} />
            </Flex>
          )}
        </NavLink>
      </Reset>
    </Tooltip>
  );
};
