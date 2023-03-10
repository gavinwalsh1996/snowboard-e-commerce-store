import React from 'react'

//Css
import '../css/TypeSelector.scss'

function TypeSelector({setFilteredObjects}) {

    //Get user selection
    function getUserSelection(event) {
      let selection = event.target.value;

      if (selection === 'default') {
        setFilteredObjects('');
      } else {
        setFilteredObjects(selection);
      }
    }

  return (
    <div className="filterable-container">
       <select onChange={getUserSelection} name='shape' style={{backgroundColor: 'yellow', color: '#5A5A5A', borderRadius: '.2rem'}}>
            <option selected disabled>shape</option>
            <option value='default'>All</option>
            <option value='directional'>directional</option>
            <option value='directional-twin'>directional-twin</option>
            <option value='twin'>twin</option>
        </select>
        <select onChange={getUserSelection} style={{backgroundColor: 'yellow', color: '#5A5A5A', borderRadius: '.2rem'}}>
            <option selected disabled>size</option>
            <option value='default'>All</option>
            <option value='156'>156</option>
            <option value='154'>154</option>
            <option value='157'>157</option>
        </select>
    </div>

  )
}

export default TypeSelector