import React, { useCallback } from "react";
import { useGlobals } from "@storybook/api";
import { Icons, IconButton } from "@storybook/components";
import { TOOL_ID } from "./constants";

export const Tool = () => {
  const [{ isDarkMode }, updateGlobals] = useGlobals();

  const toggleMyTool = useCallback(
    () =>
      updateGlobals({
        isDarkMode: !isDarkMode,
      }),
    [isDarkMode]
  );

  return (
    <IconButton
      key={TOOL_ID}
      active={isDarkMode}
      title="Theme"
      onClick={toggleMyTool}
    >
      <Icons icon="mirror" />
      Theme
    </IconButton>
  );
};
