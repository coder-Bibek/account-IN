import './App.module.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from '../pages/home';
import MainLayout from '../common/components/templates/layout';
import RequireAuth from '../common/components/auth/index';
import Account from '../pages/accounts';
import Login from '../pages/login';
import Investments from '../pages/investments';
import Redirect from '../pages/redirect';

export default function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/accounts' element=
            {
              <RequireAuth>
                <Account></Account>
              </RequireAuth>
            }
          ></Route>
          <Route path='/investments' element=
            {
              <RequireAuth>
                <Investments></Investments>
              </RequireAuth>
            }
          ></Route>
        </Route>

        <Route path='*' element={<Redirect></Redirect>} />

      </Routes>
    </Router>
  )
}
