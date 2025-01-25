import { dashnav } from '@/data'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <div className="sidenav">
            <div className="icon">
                Worldg3nius
            </div>
            <div className="nav">
                <ul>
                    {
                        dashnav.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dashboard