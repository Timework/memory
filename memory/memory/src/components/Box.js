import React, { useState, useEffect } from 'react';
import fubuki from '../pictures/fubuki.jpg'

const Box = (props) => {

    return (
        <div>
            {props.pic}
            <p className="holoname">{props.name} </p>
        </div>
    );

};

export default Box