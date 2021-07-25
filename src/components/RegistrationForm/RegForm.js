import React, {useState} from 'react';
import GirlImg from '../../assets/images/girl1-bg.png'


function RegistrationForm(props) {
  return(
        <div className="from-main home-footer-form">
            <img src={GirlImg} alt="bg-img"/>
            <div className="card col-12 col-lg-4 login-card hv-center px-5 bg-green-800 rounded-lg">
                <h1 className="text-black  text-3xl text-left pt-5 py-4">Registration</h1>
                <form>
                    <div className="form-group text-left">
                    {/* <label htmlFor="exampleInputEmail1" className="text-black font-normal text-lg">Name</label> */}
                    <input type="text" 
                        className="form-control bg-green-800" 
                        id="" 
                        aria-describedby="emailHelp" 
                        placeholder="Name"

                    />
                
                    </div>
                    <div className="form-group text-left">
                        {/* <label htmlFor="exampleInputPassword1" className="text-black font-normal text-lg">Phone</label> */}
                        <input type="text" 
                            className="form-control bg-green-800" 
                            id="" 
                            placeholder="Phone"
                        />
                    </div>
                    <div className="form-group text-left">
                        {/* <label htmlFor="exampleInputPassword1" className="text-black font-normal text-lg">Email</label> */}
                        <input type="text" 
                            className="form-control bg-green-800" 
                            id="" 
                            placeholder="E-mail"
                        />
                    </div>
                    <div className="form-group text-left">
                        {/* <label htmlFor="exampleInputPassword1" className="text-black font-normal text-lg">Address</label> */}
                        <input type="password" 
                            className="form-control bg-green-800" 
                            id="" 
                            placeholder="Address"
                        />
                    </div>
                    
                    <button class="bg-black rounded-full px-5 mb-5 mt-3 py-1.5 text-xl text-white font-bold">Continue</button>
                    
                </form>
            </div>
        </div>
        
    )
}

export default RegistrationForm;