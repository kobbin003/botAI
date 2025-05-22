import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
const theme = createTheme({
	palette: {
		primary: { main: "#9785BA", light: "#AF9FCD", contrastText: "#F9FAFA" },
		secondary: { main: "#D7C7F4", contrastText: "#FFFFFF" },
		text: {
			primary: "#3C3C3C", // main text color
			secondary: "#757575", // for less important content
			// disabled: "#bdbdbd",
			// disabled:
		},
	},
	typography: { fontFamily: `"Ubuntu", "Open Sans` },
});
const CustomThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
