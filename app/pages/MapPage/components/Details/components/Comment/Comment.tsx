import { FC } from "react";
import styles from "./Comment.module.css";
import { Flex, Text, Avatar } from "@radix-ui/themes";

export type CommentProps = {
  color: any;
  fallback: string;
  date: string;
  message: string;
  status?: boolean;
};

export const Comment: FC<CommentProps> = ({
  color,
  fallback,
  date,
  message,
  status,
}) => {
  return (
    <Flex gap="2" className={styles.root}>
      <Avatar fallback={fallback} size="1" radius="full" color={color} />
      <Flex direction="column">
        <Text size="1" weight="medium" color="gray" style={{ fontSize: 11 }}>
          {date}
        </Text>
        <Text
          size="1"
          color={status ? "gray" : undefined}
          weight={status ? "medium" : undefined}
          style={{ fontSize: 13 }}
        >
          {message}
        </Text>
      </Flex>
    </Flex>
  );
};
