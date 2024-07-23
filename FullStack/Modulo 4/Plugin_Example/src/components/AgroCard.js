import React from "react";

function AgroCard({ title, content, icon, pattern })
{
    return (
        <div className={`bg-soil text-sky-light p-4 rounded-lg shadow-lg ${pattern}`}>
            <div className="flex items-center mb-2">
                <span className={`icon-${icon} text-2xl mr-2`}></span>
                <h2 className="text-xl font-bold">{title}</h2
                >
            </div>
            <p>{content}</p>
        </div>
    );
}
export default AgroCard;