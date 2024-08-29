import React from 'react';
import { Provider } from 'react-redux';
import EmployeePage from './Containers/EmployeePage';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <EmployeePage />
    </Provider>
  );
}

export default App;