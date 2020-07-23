import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';
const CollectionItem = (props) => {
    const { item } = props;
    const dispatch = useDispatch();
    const { id, name, price, imageUrl } = item;
    const addItem = (item) => {
        const action = addToCart(item);
        dispatch(action);
    }
    const backGroundStyle = imageUrl ? { backgroundImage: `url(${imageUrl})` } : {};
    return (
        <div className="collection-item">
            <div className="image" style={backGroundStyle}></div>
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    {price}
                </span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>ADD TO CART</CustomButton>
        </div>
    );
}

export default CollectionItem;