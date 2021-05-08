import React from 'react';
import './preview-collection.style.scss';
import Collectionitem from '../collection-item/collection-item.comp';
const Previewcollection = ({title, items})=>(
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()} </h1>
        <div className="preview">
            {items.filter((item, indx)=> indx<4)
                .map((item)=>(
              <Collectionitem key={item.id} item={item}/>
            ))}
        </div>
    </div>
)


export default Previewcollection;