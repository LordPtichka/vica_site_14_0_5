"use client"
import Image from "next/image"
import styles from "./Popup_carousel.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"

import btn_close from '@/component/icon/close.svg'
import { env } from "process"
import { useEffect, useState } from "react"

export default function Popup_carousel() {
  
  // ========================================
  const [count, setCount] = useState(0)
  // ========================================

  // let lenght_carusel:number = Number(document.querySelector("#popup_carousel")?.getAttribute("data-test"))
  let lenght_carusel = 7
  let lenght_carusel_px = 760*lenght_carusel
  // ========================================

  // ========================================
  const limit_count_max = (count:number) => {
    console.log(count)
    // if (count <= -((lenght_carusel-1)*760)) setCount(-((lenght_carusel-1)*760))
    if (count <= -((lenght_carusel-1)*760)) setCount(0)
  }
  // ========================================
  const limit_count_min = (count:number) => {
    if (count >= 0) setCount(0)
  }
  // ========================================
  // ========================================
  const clickNoPop = (event:Event) => {  
    if (event.target.id == "popup_carousel") PopupClose()
  }
  const PopupClose = () => {
    document.querySelector("#popup_carousel").style.display = 'none'
  }

  return (
    <section className={styles.section_popup} id="popup_carousel" data-test="7" onClick={(event) => clickNoPop(event)}>
        <div className={styles.card_popup}>
          <div className={styles.btn_wrap}>

            <div className={`${styles.btn_prev} ${styles.btn}`} onClick={() => {setCount(count + 760);limit_count_min(count)}}></div>
            <div className={`${styles.btn_next} ${styles.btn}`} onClick={() => {setCount(count - 760);limit_count_max(count)}}></div>
          </div>
          <div className={styles.carousel_wrap} >
            <div className={styles.carousel_linear} id="carousel_linear" style={{transform:`translateX(${count}px)`}}>
            {/* <div className={styles.carousel_linear} id="carousel_linear" > */}

            </div>
          </div>
          <div className={styles.bloc_text} id="popup_carousel_text" >
            <div className={`${fonts.Ramillas_700} ${fonts.light_16} ${fonts.color_black}`} id="title"></div>
            <div className={`${fonts.Fors_500} ${fonts.light_13} ${fonts.color_black}`} id="sub_title"></div>
            <div className={`${fonts.Fors_300} ${fonts.light_13} ${fonts.color_black}`} id="description"></div>
          </div>
        </div>
        {/* <button className={styles.btn_close} onClick={() => PopupClose()} >
            <Image src={btn_close} alt=""/>
        </button> */}
    </section>
  )
}
