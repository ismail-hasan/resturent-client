import React from 'react';


const Cover = ({ details, coverImg, title }) => {
    return (
        <div>
            <div
                className="hero h-[400px]"
                style={{
                    backgroundImage: `url(${coverImg})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5 text-xl">
                            {details}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;