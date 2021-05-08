import React from 'react';
import shop_data from './shop.data';
import Previewcollection from '../../components/preciew-collection/preview-collection.comp';

class Shoppage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections : shop_data
              
        }
    }

    render(){
        const collections = this.state.collections
        return(
            <div className="shop-page">
               {collections.map(({id , ...othercollectionprops})=>(
                  <Previewcollection key={id} {...othercollectionprops}/> 
               ))}
            </div>

        )
    }
}

export default Shoppage