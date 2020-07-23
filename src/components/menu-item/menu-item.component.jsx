import React from 'react';
import { useHistory } from 'react-router-dom';
import "./menu-item.styles.scss";

const MenuItem = (props) => {
    const history = useHistory();

    const { section } = props;
    const { linkUrl } = section;
    // console.log("linkUrl:", section.linkUrl);


    const backgroundStyle = section.imageUrl ? { backgroundImage: `url(${section.imageUrl})` } : {};
    const goToPage = () => {
        history.push(`${linkUrl}`)
    }
    return (
        <div className={`menu-item ${section.size}`} onClick={() => goToPage()}>
            <div className="background-image" style={backgroundStyle}></div>
            <div className="content">
                <h1 className="title">{section.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;