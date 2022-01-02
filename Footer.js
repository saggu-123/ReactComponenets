import React from 'react';
import '../Sass/Footer.scss';
import { useForm } from 'react-hook-form';
import {BsFacebook , BsInstagram , BsTwitter , BsYoutube} from 'react-icons/bs';

const Footer = () => {
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    const SubmitEmail = (data) => {
        console.log(data)
        reset()};

    return (
        <>
        <div className="footer-box">
             <div className="foot">
              <div classname="Quick-links">
                  <h2>Quick Links </h2>
                  <div classNmae="t-links">
                     <a href="">Terms policies </a>
                     <a href="">Shipping  and Return  </a>
                   
                     
                      </div>

              </div>
            
              <div classname="Newsletter">
                  <h2>Newsletter</h2>
                  <form onSubmit={handleSubmit(SubmitEmail)}>
                    
                  <input  className="sub-input" 
                  type="email"
                 placeholder="Email"
                   {...register("Email",
                    {required: true, pattern: /^\S+@\S+$/i})} />
                  {errors.Email && <p className="error">Please check your Email</p>}
                
                  <button className="sub-btn">SUBSCRIBE</button>
                  </form>
              </div>
            
               </div>
            <div className="last-box">
             <div className="social-links">

                 <a href=""><BsFacebook></BsFacebook></a>
                 <a href=""><BsInstagram></BsInstagram></a>
                 <a href=""><BsTwitter></BsTwitter></a>
                 <a href=""><BsYoutube></BsYoutube></a>
             </div>
             <div className="copy">
                 <h3>@copy 2021 , Nomads Powered by ....</h3>
             </div>
             </div>

             </div>
        </>
    )
}

export default Footer

