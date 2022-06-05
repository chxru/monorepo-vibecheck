import {
  usePlateEditorRef,
  MarkToolbarButton,
  getPluginType,
  MARK_HIGHLIGHT,
} from "@udecode/plate";
import { Highlight } from "styled-icons/material";

export const HighlightToolbarButton = () => {
  const editor = usePlateEditorRef()!;

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_HIGHLIGHT)}
      icon={<Highlight />}
    />
  );
};
