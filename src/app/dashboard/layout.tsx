import React from 'react'
import styles from "./layout.module.css";

// Components
import Sidebar from '@/components/Sidebar/Sidebar';

const AdminLayout = ({children}: {children: React.ReactNode}) => {

  return (
    <main className={styles.app__layout}>
      <Sidebar/>
      <section className={styles.app__dashboard}>
        <div className={styles.dashboard__center}>{children}</div>
      </section>
    </main>
  )
}

export default AdminLayout;