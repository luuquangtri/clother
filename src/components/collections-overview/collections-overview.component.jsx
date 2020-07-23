import React from 'react';
import { useSelector } from 'react-redux';
import CollectionReview from '../review-collections/review-collection.component';

function CollectionsOverview(props) {
    const collections = useSelector(state => state.shop.collections);
    return (
        <div className="collections-overview">
            {Object.keys(collections).map(key => collections[key]).map(({ id, ...ortherCollectionsProps }) => (
                <CollectionReview key={id} {...ortherCollectionsProps} />
            ))}
        </div>
    );
}

export default CollectionsOverview;