import type { MetaFunction } from "@vercel/remix";
import { MapPage } from "~/pages/MapPage";
import { RootPage } from "~/pages/RootPage";

export const meta: MetaFunction = () => {
  return [{ title: "Firefly Takehome" }];
};

export default function Index() {
  return <MapPage />;
}
