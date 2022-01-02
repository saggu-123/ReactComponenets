import {useState } from 'react'

const Simpleinput = (props) => {
    const [enterName , setEnterName] = useState('');
    const [enterEmail , setEnterEmail] = useState('');
    const [enterps, setEnterps] = useState('');
    const [nameisValid , setNamevalid] =useState(true);
    const [enterNameTouched , setEnternameTouched] =useState('');

 const enternameisValid = enterName.trim()!== '';
 const nameisVlaid = !enternameisValid && enterNameTouched;
    const nameInputChange = event =>{
         setEnterName(event.target.value);
    };
    const emailInputChange = event =>{
        setEnterEmail(event.target.value);
   };
   const psInputChange = event =>{
    setEnterps(event.target.value);
};
    const Formsumbit = event =>{
        event.preventDefault();
    if(enterName.trim()  === ''){
        setNamevalid(false);
        return;
    }
    setNamevalid(true);
        console.log(enterEmail);
        console.log(enterName);
        console.log(enterps);
    };
    const nameInputClasses = nameisValid ? 'form=-control' : 'form-control invalid';
    return (
        <>

           <form className="login-page" onSubmit={Formsumbit}>
           <div className={nameInputClasses}>
               <label htmlfor="name">Your Name</label>
               <input
                type="text" 
                id="name"
                onChange={nameInputChange}
                value={enterName}>
                </input>
                 { ! nameisValid &&<p className="error-text">Name must not be empty</p>}
               <br/>
               <label  htmlFor="email">Your Email   </label>
               <input type="email" id="email"onChange={emailInputChange} ></input>
               <br></br>
               <label htmlFor="password"> Your Pass</label>
               <input type="password" id="password" onChange={psInputChange}></input>
           </div>
           <div className="form-btn">
               <button>Login</button>
           </div>
             </form> 
        </>
    )
}

export default Simpleinput
