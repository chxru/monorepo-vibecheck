import {
  getPluginType,
  MarkToolbarButton,
  MARK_KBD,
  usePlateEditorRef,
} from "@udecode/plate";
import { Keyboard } from "styled-icons/bootstrap";

export const KbdToolbarButton = () => {
  const editor = usePlateEditorRef()!;

  return (
    <MarkToolbarButton
      type={getPluginType(editor, MARK_KBD)}
      icon={<Keyboard />}
    />
  );
};
