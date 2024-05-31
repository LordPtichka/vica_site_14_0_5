"use client"
import { useEffect } from "react"
import styles from "./Rooms.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Link from "next/link"
import CardRooms from "./card_room/Card_room"

export default function Rooms(props:{roomData:[]}) {

  console.log(props.roomData)

  return (
    <section className={`${styles.rooms}`}>


      <section className={`${styles.rooms_information}`}>
        <div className={`${styles.information}`}>
          <div className={`${styles.title_rooms} ${fonts.Ramillas_500} ${fonts.title_48}`}>Номера</div>
          <div className={`${styles.subtitle_rooms} ${fonts.Fors_500} ${fonts.light_16}`}>К Вашему выбору 63 номера, разных категорий </div>
          <div className={`${styles.description_rooms} ${fonts.Fors_300} ${fonts.light_16}`}>Отель расположен в историческом центре Выборга, в непосредственной близости от Выборгского замка и старого города. Номера с видом на замок и набережную.</div>
        </div>
        <div className={`${styles.btn_block}`}>
          <Link href="/rooms" className={`${styles.btn} ${styles.btn_fill} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Посмотреть фото номеров</div></Link>
          <Link href="/booking" className={`${styles.btn} ${styles.btn_slim} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`} ><div >Забронировать</div></Link>
          <Link href="/rooms" className={`${styles.btn} ${styles.btn_slim} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`} ><div >Подробнее о номерах</div></Link>
        </div>
      </section>

      {props.roomData.length ? props.roomData.map((obj) => <CardRooms key={obj.id} roomData={obj}/>) : <div>В данный момент номеров нет</div>}

    </section>
  )
}
