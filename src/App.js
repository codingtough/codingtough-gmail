import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Mail from './components/Mail/Mail';
import EmailList from './components/EmailList/EmailList';
import SendMail from './components/SendMail/SendMail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './components/Firebase/firebase';

function App() {
   const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged(user => {
         if (user) {
            dispatch(login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoURL
            }))
         } else {
            dispatch(logout());
         }
      })
   }, [dispatch]);

   return (
      <Router>

         {!user ? (
            <Login />
         ) : (
               <div className="app">
                  <Header />
                  <div className="app__body">
                     <Sidebar />
                     <Switch>
                        <Route path="/mail" component={Mail} />
                        <Route path="/" exact component={EmailList} />
                     </Switch>
                  </div>
                  {sendMessageIsOpen && <SendMail />}
               </div>
            )
         }
      </Router>
   );
}

export default App;
