import React from 'react';
import './form-inp.style.scss';


const Forminput = ({handleChange , label ,type, value,  ...otherformprops})=>(

    <div className="group">
        <input type={type} className="form-input" value={value} {...otherformprops} onChange={(e)=>{handleChange(e)}}  />
        {
            
            label ? (<label className={`${value.length ? `shrink` : ``} form-input-label`}> {label} </label>) : null
        }
    </div>

)


export default Forminput;


