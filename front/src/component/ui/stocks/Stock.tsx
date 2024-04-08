"use client"

import styles from "./Stokcs.module.scss"
import { useEffect } from "react"

import fonts from "@/component/fonts/Fonts.module.scss"

export default function Stock() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://${process.env.HOST}/room/all`)
      const data = res.json()
      console.log(data)
      return data
    }
    console.log("test")
    fetchData()
    // console.log(fetchData())
  }, [])

  return (
    <section className={styles.section_stocks}>
      <div className={`${fonts.Ramillas_500} ${styles.block_title}`}>Акции</div> 
      <div className={styles.card_wrap}>
        <div className={styles.card}>
          <div className={styles.card_img}></div>
          <div className={`${fonts.Ramillas_300} ${styles.card_title}`}>ГАСТРОУЖИН 27 МАЯ – ЗАПУСК НОВОГО МЕНЮ</div>
          <div className={`${fonts.Fors_300} ${styles.card_description}`}>
            27 мая в 19:00 в стенах ресторана “Монрэпа” пройдет гастроужин Запускаем новое меню от шеф – повара Константина Ивлева. В программе 5 курсов блюд и идеально подобранные напитки.
          </div>
        </div>
      </div>
    </section>
  )
}
