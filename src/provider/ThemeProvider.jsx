import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
const theme = createTheme({
	cssVariables: true,
	palette: {
		primary: { main: "#9785BA", light: "#AF9FCD", contrastText: "#F9FAFA" },
		secondary: {
			main: "#D7C7F4",
			light: "#f5f2fb",
			darkerLight: "#eee8f7",
			contrastText: "#FFFFFF",
		},
		text: {
			primary: "#414146", // main text color
			secondary: "#757575", // for less important content
			// disabled: "#bdbdbd",
			// disabled:
		},
		// primary: "#3C3C3C", // main text color
	},
	typography: {
		fontFamily: `"Ubuntu", "Open Sans"`,
		fontSize: 12,
		h1: {
			fontSize: "2rem", // or '48px', etc.
			fontWeight: 700,
			lineHeight: 1.2,
		},
		h2: {
			fontSize: "1.8rem", // or '48px', etc.
			fontWeight: 700,
			lineHeight: 1.2,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
				},
			},
		},
	},
});
const CustomThemeProvider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
