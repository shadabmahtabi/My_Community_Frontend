import React from 'react'

const WelcomeMessage = ({user}) => {
  return (
    <div>
       {/* Welcome Message */}
       <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Our Book Library
        </h1>
        {user && (
          <p className="text-lg text-gray-600">Hello, {user.username}🖐️</p>
        )}
      </div>
    </div>
  )
}

export default WelcomeMessage