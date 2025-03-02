import { FC } from "react";
import styles from "./Details.module.css";
import {
  Button,
  Callout,
  Flex,
  IconButton,
  Text,
  TextField,
} from "@radix-ui/themes";
import { PaperPlaneRight } from "@phosphor-icons/react/PaperPlaneRight";
import { X } from "@phosphor-icons/react/X";
import { Comment } from "./components/Comment";
import { Info } from "@phosphor-icons/react/Info";
import routeImage from "./route.jpg";

export type DetailsProps = {};

export const Details: FC<DetailsProps> = () => {
  return (
    <Flex direction="column" className={styles.root}>
      <Flex align="center" justify="between" p="2" className={styles.header}>
        <Flex p="1">
          <Text size="3" weight="medium">
            Request for First-aid
          </Text>
        </Flex>
        <IconButton size="2" variant="ghost" color="gray" style={{ margin: 0 }}>
          <X size={18} />
        </IconButton>
      </Flex>
      <Flex flexGrow="1" direction="column" gap="3" p="2">
        <Callout.Root size="1" variant="soft" color="gray">
          <Callout.Icon>
            <Info />
          </Callout.Icon>
          <Callout.Text>
            A kid tripped and fell down the stairs. Badly wounded.
          </Callout.Text>
        </Callout.Root>
        <Flex direction="column" gap="4">
          <Comment
            color="indigo"
            fallback="B"
            date="3/3/2025 5:12 PM"
            message="Bryan reported an incident"
            status
          />
          <Comment
            color="mint"
            fallback="J"
            date="3/3/2025 5:15 PM"
            message="James: It's gotten a lot worse!"
          />
          <Comment
            color="amber"
            fallback="T"
            date="3/3/2025 5:18 PM"
            message="Taylor: PLEASE SEND HELP!"
          />
          <Comment
            color="purple"
            fallback="D"
            date="3/3/2025 5:24 PM"
            message="Dispatch: Follow this route"
          >
            <img
              src={routeImage}
              alt="Route"
              style={{
                objectFit: "cover",
                width: "100%",
              }}
            />
            <Button size="1" variant="soft" color="gray">
              Edit route
            </Button>
          </Comment>
        </Flex>
      </Flex>
      <Flex align="center" p="2" gap="2">
        <Flex direction="column" flexGrow="1">
          <TextField.Root
            size="2"
            placeholder="Type a message"
            variant="surface"
          />
        </Flex>
        <IconButton variant="soft" color="gray" style={{ margin: 0 }}>
          <PaperPlaneRight />
        </IconButton>
      </Flex>
    </Flex>
  );
};
