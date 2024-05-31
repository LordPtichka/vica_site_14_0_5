"use client"

import { useState } from "react"
import styles from "./Card.module.scss"

import fonts from "@/component/fonts/Fonts.module.scss"

export default function Card(props:{test:object}) {


  const Test = (data:object) => {
    const popup = document.querySelector("#popup")


    popup.style.display = 'flex'
      console.log(data)

      popup.querySelector("#title").innerHTML = data.title
      popup.querySelector("#sub_title").innerHTML = data.title
      popup.querySelector("#description").innerHTML = data.description
      popup.querySelector("#imagePath").style.backgroundImage = `url(http://${process.env.HOST}/${data.imagePath})`
  }


  return (

    <div className={styles.card} onClick={() => {Test(props.test)}} >
        <div className={styles.card_img} style={{backgroundImage:`url(http://${process.env.HOST}/${props.test.imagePath})`}}></div>
        <div className={`${styles.card_information}`}>
          <div className={`${fonts.Ramillas_500} ${fonts.light_16} ${styles.card_title}`}>{props.test.title}</div>
          <div className={`${fonts.Fors_300} ${fonts.light_13} ${styles.card_description}`}>{props.test.description}</div>
        </div>
    </div>

  )
}
