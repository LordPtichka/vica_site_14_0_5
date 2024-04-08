"use client"

import styles from "./Restaurant.module.scss"
import { useEffect } from "react"

import fonts from "@/component/fonts/Fonts.module.scss"

export default function Restaurant() {
  useEffect(() => {}, [])

  return (
    <section className={styles.section_restaurant}>
      <div className={styles.block_img}></div>
      <div className={styles.block_info}>
        <div>
          <b className={` ${styles}`}>Ресторан</b>
          <b className={` ${styles}`}>Вкус</b>
        </div>
        <div>
          Открытая летняя терраса, с панорамным видом на старый город. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском
          стиле ждут вас.
        </div>
        <div>
          <div>
            <div>Время работы:</div>
            <div>Пн - Пт: 07:00 - 11:00</div>
            <div>Сб - Вс: 07:00 - 12:00</div>
          </div>
          <div>Забронировать</div>
        </div>
      </div>
    </section>
  )
}
