import {
  usePlateEditorRef,
  BalloonToolbar,
  MarkToolbarButton,
  getPluginType,
  MARK_BOLD,
  MARK_ITALIC,
  MARK_UNDERLINE,
} from "@udecode/plate";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "styled-icons/material";

export const MarkBallonToolbar = () => {
  const editor = usePlateEditorRef()!;

  const arrow = false;
  const theme = "dark";
  const tooltip: any = {
    arrow: true,
    delay: 0,
    duration: [200, 0],
    hideOnClick: false,
    offset: [0, 17],
    placement: "top",
  };

  return (
    <BalloonToolbar
      popperOptions={{
        placement: "top",
      }}
      theme={theme}
      arrow={arrow}
    >
      <MarkToolbarButton
        type={getPluginType(editor, MARK_BOLD)}
        icon={<FormatBold />}
        tooltip={{ content: "Bold (⌘B)", ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_ITALIC)}
        icon={<FormatItalic />}
        tooltip={{ content: "Italic (⌘I)", ...tooltip }}
      />
      <MarkToolbarButton
        type={getPluginType(editor, MARK_UNDERLINE)}
        icon={<FormatUnderlined />}
        tooltip={{ content: "Underline (⌘U)", ...tooltip }}
      />
    </BalloonToolbar>
  );
};
