import { FC } from "react";
import styles from "./ActivityCard.module.css";
import { Badge, Flex, Text } from "@radix-ui/themes";
import { WarningCircle } from "@phosphor-icons/react/WarningCircle";
import { Info } from "@phosphor-icons/react/Info";

export type ActivityCardProps = {
  date: string;
  title: string;
  priority: "low" | "medium" | "high";
  label: string;
};

export const ActivityCard: FC<ActivityCardProps> = ({
  date,
  title,
  priority,
  label,
}) => {
  return (
    <Flex direction="column" px="2" py="2" className={styles.root}>
      <Text weight="medium" color="gray" size="1">
        {date}
      </Text>
      <Text weight="medium" size="2" mb="2">
        {title}
      </Text>
      <Flex>
        <Badge
          size="1"
          variant="soft"
          color={
            priority === "high"
              ? "crimson"
              : priority === "medium"
              ? "yellow"
              : "gray"
          }
        >
          <Flex align="center" gap="1">
            <Info size={12} />
            {label}
          </Flex>
        </Badge>
      </Flex>
    </Flex>
  );
};
