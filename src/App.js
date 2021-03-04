import React from 'react';
import { Provider } from "react-redux";
import store from './store'
import SideBar from './components/Sidebar'
import Video from './components/Video'

function app() {
  return <div>
    <Provider store={store}>
      <Video/>
      <SideBar/>
    </Provider>

  </div>;
}

export default app;