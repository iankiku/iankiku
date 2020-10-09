import React from 'react';




//* / Site Layout
export const Layout = (props) => {
    console.log(props)
    return (
        <div>
            <div className="wrapper">
                {props.children};
            </div>

        </div>
    );
}