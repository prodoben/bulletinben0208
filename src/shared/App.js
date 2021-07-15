import React from 'react';
import Header from '../components/Header';
import PostList from '../pages/PostList'
import PostWrite from '../pages/PostWrite';

import { Button } from '../elements';
import { history } from "../redux/configurestore";
import {Route} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";


const App = () => {

  return (
<React.Fragment>
    <div>
      <Header>
      <Button _onclick={() => {history.push('/write');}}>글작성</Button>
      </Header>
      <ConnectedRouter history={history}>
        <Route path="/" exact component={PostList} />
        <Route path="/Write" exact component={PostWrite} />
        </ConnectedRouter>
    </div>
  </React.Fragment>
  );
}

export default App;
