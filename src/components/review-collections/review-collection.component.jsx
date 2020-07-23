import React from 'react';
import "./review-collections.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';
const CollectionReview = (props) => {
    let { title, items } = props;
    return (
        <div className="collection-review" >
            <div className="title">{title.toUpperCase()}</div>
            <div className="review">
                {items.filter((item, index) => index < 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default CollectionReview;