import * as Types from '../../configs/actionType';

const INITIAL_STATE = {
    sections: [
        {
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            size: "large",
            linkUrl: "shop/hats",
            id: 1
        },
        {
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            size: "large",
            linkUrl: "shop/jackets",
            id: 2
        },
        {
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            size: "large",
            linkUrl: "shop/sneakers",
            id: 3
        },
        {
            title: "woments",
            imageUrl: "https://i.ibb.co/GCCdy8t/woments.png",
            size: "large",
            linkUrl: "shop/woments",
            id: 4
        },
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
            size: "large",
            linkUrl: "shop/mens",
            id: 5
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}
export default directoryReducer