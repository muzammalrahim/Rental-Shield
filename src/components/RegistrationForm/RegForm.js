import React, {useState} from 'react';
import GirlImg from '../../assets/images/girl1-bg.png'


function RegistrationForm(props) {
  return(
        <div className="from-main">
            <img src={GirlImg} alt="bg-img"/>
            <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form>
                    <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="exampleInputPassword1">Confirm Password</label>
                        <input type="password" 
                            className="form-control" 
                            id="confirmPassword" 
                            placeholder="Confirm Password"
                        />
                    </div>
                    <button 
                        type="submit" 
                        className=""
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default RegistrationForm;