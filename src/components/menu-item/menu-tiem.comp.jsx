import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom'

 const Menuitem = ({ title , imageUrl , size , history , linkUrl, match })=>(
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div style={{
 backgroundImage : `URL(${imageUrl})`
    } } className="background-image"></div>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
    </div>
</div>
);
export default withRouter(Menuitem);