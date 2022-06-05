import React from "react";
import {
  ColorPickerToolbarDropdown,
  HeadingToolbar,
  ImageToolbarButton,
  LineHeightToolbarDropdown,
  LinkToolbarButton,
  MARK_BG_COLOR,
  MARK_COLOR,
  MediaEmbedToolbarButton,
} from "@udecode/plate";
import { Check, Link } from "styled-icons/bootstrap";
import {
  FormatColorText,
  FontDownload,
  Image,
  LineWeight,
  OndemandVideo,
} from "styled-icons/material";
import { AlignToolbarButtons } from "./toolbar/Align";
import { BasicElementToolbarButtons } from "./toolbar/BasicElements";
import { BasicMarkToolbarButtons } from "./toolbar/BasicMart";
import { IndentToolbarButtons } from "./toolbar/Indent";
import { ListToolbarButtons } from "./toolbar/List";
import { TableToolbarButtons } from "./toolbar/Table";

const Toolbar = () => {
  return (
    <HeadingToolbar>
      <BasicElementToolbarButtons />
      <ListToolbarButtons />
      <IndentToolbarButtons />
      <BasicMarkToolbarButtons />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_COLOR}
        icon={<FormatColorText />}
        selectedIcon={<Check />}
        tooltip={{ content: "Text color" }}
      />
      <ColorPickerToolbarDropdown
        pluginKey={MARK_BG_COLOR}
        icon={<FontDownload />}
        selectedIcon={<Check />}
        tooltip={{ content: "Highlight color" }}
      />
      <AlignToolbarButtons />
      <LineHeightToolbarDropdown icon={<LineWeight />} />
      <LinkToolbarButton icon={<Link />} />
      <ImageToolbarButton icon={<Image />} />
      <MediaEmbedToolbarButton icon={<OndemandVideo />} />
      <TableToolbarButtons />
    </HeadingToolbar>
  );
};

export default Toolbar;
