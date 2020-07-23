import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import "./shop.styles.scss";
function ShopPage() {
    const match = useRouteMatch();
    console.log("routing in shop", match);
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
}

export default ShopPage;