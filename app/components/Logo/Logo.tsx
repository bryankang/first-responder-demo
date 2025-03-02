import { Flex } from "@radix-ui/themes";
import { FC } from "react";

export type LogoType = {};

export const Logo: FC<LogoType> = () => {
  return (
    <Flex align="center" justify="center" p="1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={22}
        fill="none"
      >
        <path
          fill="#007AFF"
          d="M9.24 1.128h11.805l-8.68 12.96H.56l8.68-12.96Z"
        />
        <path
          fill="#312ECB"
          d="m9.757 15.288-3.362 5.02H18.76l8.679-12.96h-9.127l-5.317 7.94h-3.24Z"
        />
      </svg>
    </Flex>
  );
};
