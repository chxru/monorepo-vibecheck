import {
  usePlateEditorRef,
  ToolbarButton,
  getPreventDefaultHandler,
  outdent,
  indent,
} from "@udecode/plate";
import {
  FormatIndentDecrease,
  FormatIndentIncrease,
} from "styled-icons/material";

export const IndentToolbarButtons = () => {
  const editor = usePlateEditorRef()!;

  return (
    <>
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
        icon={<FormatIndentDecrease />}
      />
      <ToolbarButton
        onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
        icon={<FormatIndentIncrease />}
      />
    </>
  );
};
