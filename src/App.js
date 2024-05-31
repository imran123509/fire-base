import logo from './logo.svg';

//import {getDatabase, ref, set} from 'firebase/database';
import {getAuth, createUserWithEmailAndPassword, SignInMethod} from "firebase/auth"
import {app} from "./firebase";
import './App.css';
import SignUpPage from './pages/SignUp';
import Signin from './pages/signin';

const auth=getAuth(app)
//const db=getDatabase(app)
function App() {

  // const putData= ()=>{
     
  //      set(ref(db, "user/imran"), {
  //            id:1,
  //            name: "imran hassan",
  //            age: 21
  //      });
  // };

  const signUpUser= () =>{
       createUserWithEmailAndPassword(
        auth,
        "hassanimran114@gmail.com",
        "hassanimran"
       ).then((value)=> console.log(value));
  };
  return (
    <div className="App">
       
        {/* <button onClick={signUpUser}>Create User</button> */}


    <SignUpPage />
    <Signin/>
     </div>
  );
}

export default App;
