/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#f5f4f0",
    primary: "#639",
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: 0,
      span: {
        display: "block",
        fontSize: 3,
        margin: "0 auto",
        maxWidth: "container",
        padding: 3,
        width: "90vw",
      },
    },
    Main: {
      margin: "0 auto",
      maxWidth: "container",
      width: "90vw",
    },
    Container: {
      padding: 0,
      paddingBottom: 3,
      paddingTop: 3,
    },
    h1: {
      padding: '8px',
      color: '#9bccbb',
      borderBbottom: '2px solid',
      borderRight: 'none',
      borderRadius: '0px 0px 56px 0px',
      background: '#ffffff'
    },
  },
}
