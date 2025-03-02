import { FC, useState } from "react";
import styles from "./Sidebar.module.css";
import {
  Button,
  Flex,
  IconButton,
  SegmentedControl,
  TextField,
} from "@radix-ui/themes";
import { ActivityCard } from "./components/ActivityCard";
import { FunnelSimple } from "@phosphor-icons/react/FunnelSimple";

export type SidebarProps = {};

export const Sidebar: FC<SidebarProps> = () => {
  const [tab, setTab] = useState<"today" | "all">("today");
  return (
    <Flex direction="column" p="2" gap="2" className={styles.root}>
      {/* <SegmentedControl.Root
        size="1"
        value={tab}
        onValueChange={(value: "today" | "all") => setTab(value)}
      >
        <SegmentedControl.Item value="today">Today</SegmentedControl.Item>
        <SegmentedControl.Item value="show-all">Show all</SegmentedControl.Item>
      </SegmentedControl.Root> */}

      <Flex align="center" gap="2">
        <Flex flexGrow="1" direction="column">
          <TextField.Root
            placeholder="Search incidents"
            variant="surface"
            color="gray"
          />
        </Flex>
        <IconButton variant="soft" color="gray" style={{ margin: 0 }}>
          <FunnelSimple size={16} />
        </IconButton>
      </Flex>

      <Flex flexGrow="1" direction="column" gap="2">
        <ActivityCard
          title="Request for First-aid"
          date="3 minutes ago"
          priority="low"
          label="Pending"
        />
        <ActivityCard
          title="Stray cat spotted"
          date="3:12 PM"
          priority="low"
          label="Dispatched"
        />
        <ActivityCard
          title="Fight between two kids"
          date="11:32 AM"
          priority="low"
          label="Resolved"
        />
      </Flex>

      <Flex direction="column">
        <Button size="2" variant="solid">
          Report incident
        </Button>
      </Flex>
    </Flex>
  );
};
