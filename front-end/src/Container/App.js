//Importing Packages
import React, {useState} from 'react';
import 
{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//Importing Files
import Home from '../Home/components/home';
import Signup from '../Signup/components/signup';
import EmailValidation from '../Email/Authentication/components/email';

const App = () => {

  // const [name,setName] = useState();
  // const lowerCase = name.toLowerCase();
  // console.log(lowerCase);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/validation" element={<EmailValidation />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
