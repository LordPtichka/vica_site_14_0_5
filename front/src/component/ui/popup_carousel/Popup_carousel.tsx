"use client"
import Image from "next/image"
import styles from "./Popup_carousel.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"

import btn_close from '@/component/icon/close.svg'

export default function Popup() {

  // const clickNoPop = (event:Event) => {
  //   // console.log(event.target.id)
  //   if (event.target.id == "popup") PopupClose()
  // }
  // const PopupClose = () => {
  //   document.querySelector("#popup").style.display = 'none'
  // }


  return (
    <section className={styles.section_popup} id="popup" onClick={(event) => clickNoPop(event)}>
        {/* <div className={styles.card_popup}>
            <div className={styles.img_popup} id="imagePath"></div>
            <div className={styles.bloc_text}>
              <div className={`${fonts.Ramillas_700} ${fonts.light_16} ${fonts.color_black}`} id="title">ГАСТРОУЖИН 27 МАЯ – ЗАПУСК НОВОГО МЕНЮ </div>
              <div className={`${fonts.Fors_300} ${fonts.light_13} ${fonts.color_black}`} id="sub_title">Попробуйте новые вкусы в сете из 5 блюд</div>
              <div className={`${fonts.Fors_300} ${fonts.light_13} ${fonts.color_black}`} id="description">27 мая в 19:00 в стенах ресторана “Монрэпа” пройдет гастроужин Запускаем новое меню от шеф – повара Константина Ивлева. В программе 5 курсов блюд и идеально подобранные напитки.</div>
            </div>
            <button className={styles.btn_close} onClick={() => PopupClose()} >
              <Image src={btn_close} alt=""/>
            </button>
        </div> */}
    </section>
  )
}
