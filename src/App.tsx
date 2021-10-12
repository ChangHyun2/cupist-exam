import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Global, css } from "@emotion/react";

import { homePage, userPage } from "@pages";
import Layout from "@components/Layout";
import { AuthContextProvider } from "@context/auth";
import { me } from "@db/users";

function App() {
  return (
    <Router>
      <Global
        styles={css`
          body {
            min-height: 100vh;
            min-height: -webkit-fill-available;
            overflow: scroll;
          }

          html {
            height: -webkit-fill-available;
          }
        `}
      />
      <AuthContextProvider value={me}>
        <Layout>
          <Switch>
            <Route path="/" component={homePage} exact />
            <Route path="/user" component={userPage} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
