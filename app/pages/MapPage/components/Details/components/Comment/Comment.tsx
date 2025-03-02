import { FC, ReactNode } from "react";
import styles from "./Comment.module.css";
import { Flex, Text, Avatar } from "@radix-ui/themes";

export type CommentProps = {
  children?: ReactNode;
  color: any;
  fallback: string;
  date: string;
  message: string;
  status?: boolean;
};

export const Comment: FC<CommentProps> = ({
  children,
  color,
  fallback,
  date,
  message,
  status,
}) => {
  const Wrapper: FC<{ children?: ReactNode }> = ({ children }) => {
    if (status) return children;
    return (
      <Flex flexGrow="1" p="2" className={styles.wrapper}>
        {children}
      </Flex>
    );
  };

  return (
    <Flex gap="2" className={styles.root}>
      <Avatar fallback={fallback} size="1" radius="full" color={color} />
      <Wrapper>
        <Flex direction="column" gap="2">
          <Flex direction="column">
            <Text
              size="1"
              weight="medium"
              color="gray"
              style={{ fontSize: 11 }}
            >
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
          {children}
        </Flex>
      </Wrapper>
    </Flex>
  );
};
