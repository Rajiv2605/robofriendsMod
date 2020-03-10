import React from 'react';

const Searchbar = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                   onChange = {searchChange}
                   type='search' placeholder='search robots...' />
        </div>
    );
}

export default Searchbar;