import React from "react";
import { ComponentMeta } from "@storybook/react";

import Toolbar from "./HeadToolbar";

export default {
  title: "Plate/Toolbar",
  component: Toolbar,
} as ComponentMeta<typeof Toolbar>;

export const Main = () => <Toolbar />;
