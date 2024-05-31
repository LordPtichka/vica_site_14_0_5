"use client"

import styles from "./Card.module.scss"

import fonts from "@/component/fonts/Fonts.module.scss"

export default function Card() {
  return (

    <div className={styles.card}>
        <div className={styles.card_img}></div>
        <div className={`${fonts.Ramillas_300} ${styles.card_title}`}>ГАСТРОУЖИН 27 МАЯ – ЗАПУСК НОВОГО МЕНЮ</div>
        <div className={`${fonts.Fors_300} ${styles.card_description}`}>
        27 мая в 19:00 в стенах ресторана “Монрэпа” пройдет гастроужин Запускаем новое меню от шеф – повара Константина Ивлева. В программе 5 курсов блюд и идеально подобранные напитки.
        </div>
    </div>

  )
}
