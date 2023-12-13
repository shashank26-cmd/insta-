import { useState } from "react";

function Page() {
  const [turn, setTurn] = useState(false);

  return (
    <div className="w-full flex flex-wrap justify-center items-center min-h-screen">
      <div className="w-72 h-96 my-4 flex-col flex justify-center items-center bg-gray-300 bg-cover rounded-lg px-8 py-4 space-y-2">
        <h3 className="text-lg w-full flex justify-center mb-10 font-mono text-blue-600 font-bold">Instagram</h3>

        <input type="text" placeholder="Email" name="" id="" className="w-full pl-5" />
        <input type="text" placeholder="Password" name="" id="" className="w-full pl-5" />

        {turn && (
          <>
            <input type="text" placeholder="Full Name" name="" id="" className="w-full pl-5" />
            <input type="text" placeholder="Mobile Number" name="" id="" className="w-full pl-5" />
          </>
        )}

        <div className="bg-blue-400 border rounded-3xl text-white font-semibold text-center px-5 py-2 w-full" onClick={() => setTurn(!turn)}>
          {turn ? 'Sign In' : 'Login'}
        </div>

        <div className="mt-12 pt-5 flex w-full">
          <p>{turn ? 'Dont Have Account' : 'Have Account'}</p>
          <div className="text-blue-400" >{turn ? 'Sign Up' : 'Sign In'}</div>
        </div>
      </div>
    </div>
  );
}

export default Page;


//this is the another way to do this






// import { useState } from 'react';
// import './App.css';
 
// import logo from "./assets/instagram.png"

// function App() {
//   const [login,setlogin]=useState(true)

//   const loginSwitch = () => {
//     setlogin(!login)
//   }
//   return (
//    <div id='Container'>
//         <div id="user">
//               <img src={logo} alt="" />
//               <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
//               <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
//               <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
//               <input type="text" name="" id="" placeholder='Password' />
//               <button>{login?"Sign in":"Sign up"}</button>
//           <div id='footer'>
//             {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
//           </div>
//           </div>  
//    </div>
//   );
// }

// export default App;

