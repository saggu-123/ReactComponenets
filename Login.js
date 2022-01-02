import  {useState} from 'react';
import { useForm } from 'react-hook-form';
import "../Sass/Form.scss";

const Login = () => {
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const [result, setResult] = useState("");
    const onSubmit = (data) => {
    console.log(data)
    setResult(showMsg)
    reset()};

   const showMsg =()=>{
       return ('YOU have succesfully sumbitted');
   }
    
  

    return (
        <>
   
     <form  className="Form-hook"onSubmit={handleSubmit(onSubmit)}>
     <label htmlfor="first">First Name</label>
      <input 
       type="text"
       id="first"
        placeholder="First name" 
        {...register("Firstname",
        {required: true, maxLength: 20})} />
       {errors.Firstname && <p className="error">Please check the First Name</p>}

    <br/>

    <label htmlfor="last">Last Name</label>
      <input   
      type="text" 
      id="last" 
      placeholder="Last name" 
      {...register("Lastname", 
      {required: true, maxLength: 20})} />
      {errors.Lastname && <p className="error">Please check the Last Name</p>}

      <br/>

      <label htmlfor="tel"> PH-Number</label>
      <input  
       type="tel" 
       id="tel" 
       placeholder="Mobile number"
        {...register("Mobilenumber", 
        {required: true, minLength: 10, maxLength: 12})} />
      {errors.Mobilenumber && <p className="error">Number should not exceed 10</p>}

      <br/>

      <label htmlfor="email">Email</label>
      <input  
       type="text" 
       id="email"
        placeholder="Email"
         {...register("Email",
          {required: true, pattern: /^\S+@\S+$/i})} />
      {errors.Email && <p className="error">Please check your Email</p>}
      
      <br/>

      <label htmlfor="message">Mesaage</label>
      <textarea 
      id="message"
      placeholder="Write your message" rows="2" cols="20"
      {...register("Message", {required: true, minLength: 2, maxLength: 50})} >
     </textarea>
      <br/>
      <input type="submit" />
     <p className="success">{result}</p>
    </form>
     </>
    )
    };
export default Login;

