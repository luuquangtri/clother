import React from 'react';
import "./Homepage.styles.scss"
import Directory from '../../components/directory/directory.component';
HomePage.propTypes = {

};

function HomePage(props) {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
}

export default HomePage;