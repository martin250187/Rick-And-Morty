import React from "react";
import style from "./Form.module.css";
import { useState } from "react";
import validate from "./validation";

const Form = ({login}) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
  const property = event.target.name;
  const value = event.target.value;
  setUserData({...userData, [property]: value});
  setErrors(validate({...userData, [property]: value}))
  //validate({...userData, [property]: value}, setErrors, errors);
  };
 const handleSubmit = (event) => {
  event.preventDefault();
  login(userData)
}
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <img
          src="https://i.pinimg.com/originals/45/5c/88/455c8856c6c30d6ca91d199af24e1617.jpg"
          alt="NO FOUND"
        />
        <div>
          <div className={style.containerInput}>
            <label htmlFor="email">Usuario</label>
            <input type="text" id="email" name="email" value={userData.email} onChange={handleChange} className={errors.email ? style.error : style.success}/>
            <span className={errors.email ? style.errorMsj : ""}>
					      {errors.email}
				    </span>          
          </div>
          <div className={style.containerInput}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={userData.password} onChange={handleChange}/>
            <span className={errors.password ? style.errorMsj : ""}>
					      {errors.password}
				    </span>          
          </div>
          <div className={style.containerInput}>
            <button className={style.btn} >Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
