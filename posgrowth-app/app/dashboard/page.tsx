import { getServerSession } from 'next-auth'
import { AuthOptions } from '../api/auth/[...nextauth]/route'
import React from 'react'
import User from '@/components/UI/User'
const DashboardPage = async () => {
  const session = await getServerSession(AuthOptions)

  return (
    <div>
      <h1>DashboardPage</h1>
      <h2>Client Session</h2>
      <User/>
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  )
}

export default DashboardPage