import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";

export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ isDarkMode }] = useGlobals();

  useEffect(() => {
    setTheme({
      isDarkMode,
    });
  }, [isDarkMode]);

  return StoryFn();
};

function setTheme(state: any) {
  const rootElement = document.querySelector("html");
  const { isDarkMode } = state;
  if (rootElement !== null) {
    rootElement.setAttribute(
      "data-color-scheme",
      isDarkMode ? "dark" : "light"
    );
  }
}
