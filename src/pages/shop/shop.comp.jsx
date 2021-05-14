import React from 'react';
import CollectionsOreview from '../../components/collections-oreview/collections-oreview';
import collectionPage from '../collection/collection.comp';
import {Route} from 'react-router-dom';

const Shoppage = ({match})=>(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOreview}/>
                <Route  path={`${match.path}/:collectionID`}  component={collectionPage}/>
            </div>
        );

export default Shoppage;