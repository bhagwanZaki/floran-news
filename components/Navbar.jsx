import Link from 'next/link'
import React from 'react'
import styles from '../css/navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div className={styles.navHeader}>
            <div className={styles.title}>
                Floran News
            </div>
            <div className={styles.btnSec}>
                <button className={styles.signin}>
                    SIGN IN
                </button>
                <button className={styles.subscribe}>
                    Subscribe
                </button>
            </div>
        </div>
        <div className={styles.navSearchSec}>
            <form>
                <input type={'text'} className={styles.search} placeholder="Search" />
            </form>
            <div className={styles.category}>
                
                <Link href={'/'} className={styles.categoryItem}>
                    Science
                </Link>
                <Link href={'/'} className={styles.categoryItem}>
                    A.I
                </Link>
                <Link href={'/'} className={styles.categoryItem}>
                    Politics
                </Link>
                <Link href={'/'} className={styles.categoryItem}>
                    ECommerce
                </Link>
                <Link href={'/'} className={styles.categoryItem}>
                    Business
                </Link>
                <Link href={'/'} className={styles.categoryItem}>
                    Agriculture
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar