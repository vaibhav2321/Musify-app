import React from 'react'
import classes from './styles.module.css'
import Image from 'next/image'
import profileBackgroundImage from '../../Assets/profileBackground.jpg'
import profileImage from '../../Assets/profile.jpg'
import img from '../../Assets/user-profile.jpeg'

const page = () => {
    const data = "No Record";
  return (
    <div className={classes.container}>
        <div className={classes.firstSection}>kd</div>
        <div className={classes.middleSection}>
            <Image src={profileBackgroundImage} className={classes.profileBackgroundImg}/>
            <div className={classes.profilebox}>
                <div className={classes.profilebox1}></div>
                <Image src={img} className={profileImage} style={{borderRadius:'50%'}}/>
            </div>
            <div className={classes.courses}>
                <p className={classes.text3d}>
                {data}
                </p>
            </div>
        </div>
        <div className={classes.secondSection}>
            <p className={classes.text3d}>
            {data}
            </p>
        </div>
    </div>
  )
}

export default page