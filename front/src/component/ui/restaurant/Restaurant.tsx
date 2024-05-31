"use client"
import fonts from "@/component/fonts/Fonts.module.scss"
import styles from "./Restaurant.module.scss"
import { useEffect } from "react"
import Link from "next/link"

export default function Restaurant() {
  useEffect(() => {}, [])

  return (
    <section className={`${styles.restaurants}`}>
      <section className={`${styles.block_restaurant}`}>
        <div className={`${styles.img_rest}`}>
          <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`} onClick={()=>{console.log("test")}} >Посмотреть фото ресторана</div>
        </div>
        <div className={`${styles.block_information}`}>
          <div className={`${styles.block_text}`}>
            <div className={`${styles.title_rest} ${fonts.Ramillas_500} ${fonts.title_48} ${fonts.color_orange}`}>Вкус</div>
            <div className={`${styles.title_h3} ${fonts.Fors_500} ${fonts.bold_20}`}>Ресторан на 7 этаже</div>
            <div className={`${styles.text_of_rest} ${fonts.Fors_300} ${fonts.light_16}`}>Открытая летняя терраса, с панорамным видом на старый город. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле ждут вас.</div>
          </div>
          <div className={`${styles.block_time_and_btn}`}>
            <div className={`${styles.block_time}`}>
              <div className={`${fonts.Ramillas_500} ${fonts.light_16}`}>Время работы:</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Пн - Пт: 12:00 - 00:00</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Сб - Вс: 12:00 - 00:00</div>
            </div>
            <div className={`${styles.block_btn}`}>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Посмотреть меню</div></Link>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Подробнее</div></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.block_restaurant}`}>
        <div className={`${styles.block_information}`}>
          <div className={`${styles.block_text}`}>
            <div className={`${styles.title_rest} ${fonts.Ramillas_500} ${fonts.title_48} ${fonts.color_orange}`}>Монрэпа</div>
            <div className={`${styles.title_h3} ${fonts.Fors_500} ${fonts.bold_20}`}>Ресторан для завтраков</div>
            <div className={`${styles.text_of_rest} ${fonts.Fors_300} ${fonts.light_16}`}>Открытая летняя терраса, с панорамным видом на старый город. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле ждут вас.</div>
          </div>
          <div className={`${styles.block_time_and_btn}`}>
            <div className={`${styles.block_time}`}>
              <div className={`${fonts.Ramillas_500} ${fonts.light_16}`}>Время работы:</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Пн - Пт: 12:00 - 22:00</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Сб - Вс: 12:00 - 22:00</div>
            </div>
            <div className={`${styles.block_btn}`}>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Посмотреть меню</div></Link>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Подробнее</div></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.img_rest}`}>
          <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Посмотреть фото ресторана</div>
        </div>
      </section>
    </section>
  )
}
