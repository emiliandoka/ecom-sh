import React from 'react';
import './custom-btn.style.scss';


const Custombtn = ({children,isGooglesignin,addItem, ...otherbtnprops}) =>(
    <button className={`${isGooglesignin? `google-signin` : `` } custom-button ${addItem? `add-to-cart` : `` }`} {...otherbtnprops}>
        {children}
    </button>
)

export default Custombtn;