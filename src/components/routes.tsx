import * as React from "react";
import { Route, Switch } from "react-router";
import Index from "./pages/index";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

const theme = createMuiTheme({});

export class Routes extends React.Component {
  render() {
    return (
      <div
        style={{ position: "absolute", left: 0, height: "100%", width: "100%" }}
      >
        <MuiThemeProvider theme={theme}>
          <Switch>
            <Route path="/" component={Index} />
            <Route component={Index} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}
