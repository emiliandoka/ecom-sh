import React from 'react';
import './collections.oreview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import Previewcollection from '../../components/preciew-collection/preview-collection.comp';
import {selectColletionsPrev} from '../../redux/shop/shop.selector';

const collectionsOreview = ({collections})=>(
    <div className="colletions-overview">
        {collections.map(({id , ...othercollectionprops})=>(
            <Previewcollection key={id} {...othercollectionprops}/> 
        ))}
    </div>
)
const mapStatetoprops = createStructuredSelector({
    collections : selectColletionsPrev
});
export default connect(mapStatetoprops)(collectionsOreview);