import React from 'react';
function Navbar() {
    return (
        <div className="Navbar">
            <logo>Sporty</logo>
            <r>
                <button className="button" onClick={event => window.location.href = 'https://www.kaggle.com/shitalgaikwad123/skills-required-for-different-sports'}> Data </button>
            </r>
        </div>
    );
}

export default Navbar;