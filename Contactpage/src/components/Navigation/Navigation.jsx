import React from 'react'
import styles from "./Navigation.module.css"

function Navigation() {
  return (
    <div className='Navigation'>
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="./images/Frame 2 1.png" alt="logo" />
            </div>
            <ul>
                <li href="#">HOME</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation