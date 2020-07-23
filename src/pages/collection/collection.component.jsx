import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import CollectionItem from '../../components/collection-item/collection-item.component';
import * as Config_COLLECTIONS from '../../configs/collectionnType';
import "./collection.styles.scss"
function CollectionPage() {
    const match = useRouteMatch();
    console.log("routing in shop/collection id", match);
    //props to redux
    let collections = useSelector(state => state.shop.collections);
    //end
    //collection use nested routing

    const collection = Object.keys(collections).map(key => collections[key]).find(collection =>
        collection.id === Config_COLLECTIONS.COLLECTION_ID_MAP[match.params.collectionId]
    )
    const { title, items } = collection;
    // end

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
}



// class CollectionPage extends Component {
//     render() {
//         const { match, collection } = this.props;
//         console.log("collection", collection);

//         return (
//             <div className="category">
//                 <h2>Category page</h2>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     return {
//         collection: selectCollection(ownProps.match.params.collectionId)(state)
//     }
// }

export default CollectionPage;