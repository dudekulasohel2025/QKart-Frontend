import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          preventDuplicate
        >
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
   document.getElementById('root')
);



























// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { SnackbarProvider } from "notistack";

// TODO: CRIO_TASK_MODULE_REGISTER - Add Target container ID (refer public/index.html)
// ReactDOM.render(
//   <React.StrictMode>
//         <SnackbarProvider
//           maxSnack={1}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "center",
//           }}
//           preventDuplicate
//         >
//           <App />
//         </SnackbarProvider>
//   </React.StrictMode>,
//    document.getElementById('')
// );
// =======
//   </React.StrictMode>,
// );
// >>>>>>> 1619758b100fb59bcd3a5205d82322f56cb2f38f
