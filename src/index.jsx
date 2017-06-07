import React from 'react';
import {render} from 'react-dom';
import './styles/joba/index.scss';
import App from 'grommet/components/App';

import MainPage from './layouts/MainPage/MainPage.jsx';

class MyApp extends React.Component {
  render () {
    return (
        <App centered={false}>
          <MainPage/>
        </App>
    );
  }
}

render(<MyApp/>, document.getElementById('app'));
