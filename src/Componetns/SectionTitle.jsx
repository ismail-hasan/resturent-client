import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='text-center my-10 mt-20'>
            <h1 className='text-2xl text-yellow-400 pb-4'>{heading}</h1>
            <h1 className='text-3xl border-gray-400 border-y-4 py-3 w-4/12 mx-auto'>{subheading}</h1>
        </div>
    );
};

export default SectionTitle;