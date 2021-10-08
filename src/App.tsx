import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { homePage, userPage } from "@pages";
import Layout from "@components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={homePage} exact />
          <Route path="/user" component={userPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
