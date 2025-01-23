
'use client'
import React from 'react';

const page = ({params}) => {
    const id = params.productId;
    return (
        <div>
            product id : {id}
        </div>
    );
};

export default page;