import React from 'react';

export const Navbar = () => {
    const title ='{formatter:true}'

    return (
        <nav className="flex items-center justify-between p-6  mb-20 border-b-[1px] border-gray-200 h-[30px]">
            <div className="text-black text-2xl">{title}</div>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-gray-400">About</a></li>
                <li><a href="#" className="text-gray-400">Contact</a></li>
            </ul>
        </nav>
    );
};