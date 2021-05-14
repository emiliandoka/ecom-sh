import React from 'react';
import './directory.style.scss';
import Menuitem from '../menu-item/menu-tiem.comp';
import {connect} from 'react-redux';
import {selectDirectorySelections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
const Directory = ({sections})=>(
        <div className="directory-menu">
            {sections.map(({id, ...othersecprops})=>(
                <Menuitem key={id} {...othersecprops} />
            ))}
            </div>
  )
const mapStateToProps= createStructuredSelector({
  sections : selectDirectorySelections
})

export default connect(mapStateToProps)(Directory);