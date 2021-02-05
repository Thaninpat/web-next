import React from 'react'
import styles from '../styles/Home.module.css'

interface adminProps {}

const admin: React.FC<adminProps> = ({}) => {
  return (
    <div className={styles.container}>
      <h2>Admin Page</h2>
    </div>
  )
}
export default admin
