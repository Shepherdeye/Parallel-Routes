import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/dashboard"} className='text-blue-900 underline font-bold'> Dashboard</Link>
    </div>
  )
}

export default HomePage