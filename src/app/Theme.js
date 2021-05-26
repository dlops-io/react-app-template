import {
    createMuiTheme,
} from '@material-ui/core';

const Theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#252525',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: '#0066ff',
            main: '#1c4385',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#ffffff',
        },
        // error: will use the default color

    },
    typography: {
        useNextVariants: true,
        h6: {
            color: "#252525",
            fontSize: "1.1rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight:800
        },
        h5: {
            color: "#252525",
            fontSize: "1.2rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight:800
        },
        h4: {
            color: "#252525",
            fontSize: "1.8rem",
            fontFamily: "Roboto, Helvetica, Arial, sans-serif",
            fontWeight:900
        },
    },
});

export default Theme;