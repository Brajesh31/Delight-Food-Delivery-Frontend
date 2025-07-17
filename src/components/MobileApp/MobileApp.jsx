import React from 'react'
import styles from './MobileApp.module.css'
import {assets} from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className={styles.app_download} id="app_download">
        <p>For betterr Experience Download <br />Tomato App</p>
        <div className={styles.app_download_platforms}>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default MobileApp