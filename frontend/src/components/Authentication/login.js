import React from 'react'

import Signup from './signup'
function formatDate(date) {
    return date.toLocaleDateString();
  }
 
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
   function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }
const Login=(props)=> {
    const [isOn, toggleIsOn] = useToggle();
    const isLoggedIn = props.isLoggedIn;

if(isLoggedIn){
    return(
        <Signup/>
    );
  
}
else {
    return (
     
        <div>
        {isOn ? 'The light is on!' : 'Hey who turned off the lights'}
        <button onClick={toggleIsOn}>{isOn?"ON":"False"}</button>
        
        </div>
        
            );
}
    
}
export default Login;
