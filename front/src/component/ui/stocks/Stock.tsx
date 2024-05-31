"use client"

import styles from "./Stokcs.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"

import fonts from "@/component/fonts/Fonts.module.scss"
import Card from "./card/Cadr"

import icon_btn_prev from "@/component/icon/prev.svg"
import icon_btn_next from "@/component/icon/next.svg"




export default function Stock(props:{test:[]}) {

  // console.log(props.test)
  let lenght_carusel = props.test.length
  // ============
  const [count, setCount] = useState(0)

  const limit_count_max = (count:number) => {
    if (count <= -((lenght_carusel-2)*360)) setCount(-((lenght_carusel-2)*360))
  }

  const limit_count_min = (count:number) => {
    if (count >= 0) setCount(0) 
  }
  
  

  return (
    <section className={styles.section_stocks}>
      <div className={`${fonts.Ramillas_500} ${fonts.title_48} ${styles.title_stocks}`}>Акции</div> 
      
      <div className={styles.button_wrap}>
        <div className={`${styles.btn} ${styles.btn_preview}`} onClick={() => {setCount(count + 360);limit_count_min(count)}} >
          <Image src={icon_btn_prev} alt="" />
        </div>
        
        <div className={`${styles.btn} ${styles.btn_next}`} onClick={() => {setCount(count - 360);limit_count_max(count)}} >
          <Image src={icon_btn_next} alt="" />
        </div>
      </div>

      <div className={styles.card_wrap} >
        <div className={styles.card_linear} data-position={`${count}`} style={{transform:`translateX(${count}px)`}}>
          {props.test.length ? props.test.map((obj) => <Card key={obj.id} test={obj}/>) : <div>В данный момент акции не проводятся</div>}
        </div>
      </div>


    </section>
  )
}
