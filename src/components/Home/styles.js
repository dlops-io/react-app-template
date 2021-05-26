
const styles = theme => ({
    root: {
        flexGrow: 1,
        minHeight: "100vh"
    },
    grow: {
        flexGrow: 1,
    },
    main: {
        backgroundColor: "#efefef",
        // paddingLeft: theme.spacing(3),
        // paddingRight: theme.spacing(3),
        // paddingBottom: theme.spacing(2),
        //paddingTop: 15,
        zIndex: theme.zIndex.drawer + 1,
        minHeight: "100vh"
    },
    card: {
        marginBottom: "25px",
    },
    divider: {
        marginBottom: "25px"
    },
    mainBlock:{
        textAlign: "center",
        backgroundImage: "url('home.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        marginLeft: "50px",
        marginRight: "50px",
    },
    blockTransparent:{
        minHeight: "250px"
    },
    blockBackground0:{
        minHeight: "250px",
        backgroundColor: "#ffffff",
    },
    blockBackground1:{
        minHeight: "250px",
        backgroundColor: "#ffe6ea",
    },
    blockBackground2:{
        minHeight: "250px",
        backgroundColor: "#c6dbef",
    },
    codeBlock:{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: 15,
    },
    code:{
        fontFamily:"monospace",
    },
    mainTitleText:{
        fontSize: "3.5rem",
        lineHeight: "1",
        fontWeight: "700",
        maxWidth: "37rem",
        marginLeft: "auto",
        marginRight: "auto",
    },
    mainTitleDescription:{
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: "500",
        maxWidth: "29rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#6b7280",
    },
});

export default styles;