import {
  usePlateEditorRef,
  ListToolbarButton,
  getPluginType,
  ELEMENT_UL,
  ELEMENT_OL,
} from "@udecode/plate";
import { FormatListBulleted, FormatListNumbered } from "styled-icons/material";

export const ListToolbarButtons = () => {
  const editor = usePlateEditorRef()!;

  return (
    <>
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_UL)}
        icon={<FormatListBulleted />}
      />
      <ListToolbarButton
        type={getPluginType(editor, ELEMENT_OL)}
        icon={<FormatListNumbered />}
      />
    </>
  );
};
