"use client"

import styles from "./Stokcs.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"

import fonts from "@/component/fonts/Fonts.module.scss"
import Card from "./card/Cadr"

import icon_btn_prev from "@/component/icon/prev.svg"
import icon_btn_next from "@/component/icon/next.svg"


export default function Stock() {
  
  const [count, setCount] = useState(0)
  console.log(count)
  
  // useEffect(() => {}, [])

  return (
    <section className={styles.section_stocks}>
      <div className={`${fonts.Ramillas_500} ${styles.block_title}`}>Акции</div> 
      

      <div className={`${styles.btn} ${styles.btn_preview}`} 
        id="prev_card" 
        onClick={() => {setCount(count + 360)}}
      >
        <Image 
          src={icon_btn_prev}
          alt=""
        />
      </div>
      
      <div className={styles.card_wrap} data-position={`${count}`} style={{transform:`translateX(${count}px)`}}>
        <Card />
        <Card />
        <Card />
      </div>

      <div className={`${styles.btn} ${styles.btn_preview}`}
         id="next_card" 
         onClick={() => {setCount(count - 360)}}
      >
        <Image 
          src={icon_btn_next}
          alt=""
        />
      </div>


    </section>
  )
}
