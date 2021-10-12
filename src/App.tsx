import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { homePage, userPage } from "@pages";
import Layout from "@components/Layout";
import { AuthContextProvider } from "@context/auth";
import { me } from "@db/users";

function App() {
  return (
    <Router>
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
