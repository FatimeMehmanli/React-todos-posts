import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ id, name, username, email, website, profilePicture, phone }) {
    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 shadow-2xl hover:shadow-3xl p-6 rounded-lg transition-shadow duration-700  hover:scale-105 hover:bg-gradient-to-l hover:from-teal-700 hover:to-teal-600">
            {/* User profile picture and name */}
            <div className="flex items-center space-x-4 mb-4">
                <img 
                    src={profilePicture} 
                    alt={`${name}'s profile`} 
                    className="w-16 h-16 rounded-full object-cover"
                />
                <Link 
                    to={`/user/${id}`} 
                    className="text-xl font-semibold text-teal-700  hover:text-teal-500 hover:underline transition duration-700 animate-pulse"
                >
                    <h2>{name}</h2>
                </Link>
            </div>

            {/* User Details */}
            <div className="my-4">
                <p className="font-medium text-gray-400  ">
                    <b>Username:</b> {username}
                </p>
                <p className="border-t-2 border-teal-500 pt-2 mt-2 text-sm text-gray-400">
                    <b>Email:</b> {email}
                </p>
                <p className="text-sm text-gray-400 ">
                    <b>Phone:</b> {phone}
                </p>

                {/* Website and its logo */}
                <div className="flex items-center space-x-2 mt-3">
                    <img 
                        src={`https://www.google.com/s2/favicons?domain=${website}`} 
                        alt="Website logo" 
                        className="w-6 h-6"
                    />
                    <a 
                        href={`https://${website}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-teal-700  hover:text-teal-500 hover:underline transition duration-700 "
                    >
                        {website}
                    </a>
                </div>
            </div>

            {/* View Details Button */}
            <div className="mt-4 flex justify-center">
                <Link 
                    to={`/user/${id}`} 
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500 shadow-xl transition duration-700 "
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default UserCard;
