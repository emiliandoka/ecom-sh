import React from 'react';
import './collection.style.scss';
import ColectionItem from '../../components/collection-item/collection-item.comp';
import {connect } from 'react-redux';
import {SelectCollection} from '../../redux/shop/shop.selector';

const collectionPage = ({collection})=>{
    const{title, items} = collection;
    return(
    <div className="category">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map(item=>(<ColectionItem key={item.id}  item={item}/>))
            }
        </div>
    </div>
)}
const mapStateToProps= (state, ownProps)=>({
    collection : SelectCollection(ownProps.match.params.collectionID)(state)
})
export default connect(mapStateToProps)(collectionPage);