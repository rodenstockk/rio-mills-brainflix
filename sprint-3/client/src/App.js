import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import UploadPage from '../src/components/UploadPage/UploadPage';
import {Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
     <Header />
     <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/upload" exact component={UploadPage} />
      <Route path="/:id" exact component={Main} />
     </Switch>
    </div>
  );
}

export default App;
