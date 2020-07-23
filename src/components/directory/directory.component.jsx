import React from 'react';
import "./directory.styles.scss"
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';

Directory.propTypes = {

};

function Directory(props) {
    const sections = useSelector(state => state.directory.sections);

    return (
        <div className="directory-menu">
            {sections.map(section => (
                <MenuItem key={section.id} section={section} />
            ))}
        </div>
    );
}

export default Directory;