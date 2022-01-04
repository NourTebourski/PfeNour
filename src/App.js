import React ,{useEffect} from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';
import OneSignal from 'react-onesignal';

function App() {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
   OneSignal.init({
     appId: "aee2db32-157d-4adf-97df-3c3b4fb0ab2e"
   });
 }, []);
  return (
    // Bem 
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
