import React from "react";
import { ComponentMeta } from "@storybook/react";

import PlateEditor from "./Plate";

export default {
  title: "Plate/Editor",
  component: PlateEditor,
} as ComponentMeta<typeof PlateEditor>;

export const Main = () => <PlateEditor />;
