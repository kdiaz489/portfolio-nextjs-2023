// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from "@chakra-ui/react";
// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  rust: {
    50: "#fef6f2",
    100: "#fadaca",
    200: "#f6b89a",
    300: "#f18b5a",
    400: "#ed6f32",
    500: "#ce5920",
    600: "#ae4b1b",
    700: "#8c3d16",
    800: "#773313",
    900: "#56250d",
  },
  sage: {
    50: "#f4f8f5",
    100: "#d4e4d9",
    200: "#aecdb8",
    300: "#8aae96",
    400: "#7b9c86",
    500: "#688371",
    600: "#576f5f",
    700: "#46594c",
    800: "#3b4b40",
    900: "#2b362e",
  },
    mint: {
    50: "#eafcef",
    100: "#b7edc6",
    200: "#a1d1af",
    300: "#87af93",
    400: "#799d83",
    500: "#66846e",
    600: "#566f5d",
    700: "#45594b",
    800: "#3a4b3f",
    900: "#2a362d"}
};

const fonts = {
  body: "Helvetica",
  heading: "VagRoundedRegular",
  VagRoundedRegular: "VagRoundedRegular, Helvetica, sans-serif",
};

const components = {
  Button: {
    baseStyle: {
      fontFamily: "VagRoundedRegular",
    },
  },
};

const styles = { global: (props: StyleFunctionProps) => ({
  body: {
    bg: mode(
      // light mode value retrieved from theme
      props.theme.semanticTokens.colors['chakra-body-bg']._light,
      // custom dark mode color
      '#060b10',
    )(props),
  },
})}

// 3. extend the theme
const theme = extendTheme({ ...config, colors, fonts, components, styles });

export default theme;
