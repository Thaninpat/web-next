import React from 'react'
import styles from '../styles/Home.module.css'

interface dashboardProps {}

const dashboard: React.FC<dashboardProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Dashboard page</h2>
    </div>
  )
}

export default dashboard
