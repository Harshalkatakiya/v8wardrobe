import Link from 'next/link';
import React from 'react'

const Error = ({ title }) => {
    if (!title) { title = 'Page'; }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400">
            <div className="max-w-xl text-center p-8 mx-auto rounded-lg bg-white shadow-lg">
                <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-xl mb-8">{`Oops! The ${title} you're looking for could not be found.`}</p>
                <Link href="/" className='className="inline-block px-6 py-3 text-lg shadow-lg font-bold text-white uppercase bg-blue-500 rounded-lg transition-colors duration-300 hover:bg-blue-700'>Go back to Home</Link>
            </div>
        </div>
    )
}

export default Error;