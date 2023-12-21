import React from 'react'
import { useSession } from 'next-auth/react'
const DashboardPage = () => {
  const { data: Session, status } = useSession()
  console.log(Session, status)
  return (
    <div>DashboardPage
      <h1></h1>
    </div>
  )
}

export default DashboardPage