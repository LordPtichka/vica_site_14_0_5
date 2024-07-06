"use client"
import { useEffect } from "react"
import styles from "./Card_room.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Link from "next/link"

export default function CardRooms(props:{roomData:[]}) {


  return (
    <>
      <div className={`${styles.room_card}`}>
        <div className={`${styles.gradient}`}>
         <div className={`${styles.card_img}`} style={{background:`linear-gradient(180deg, transparent 60%, #00000099 85%), url(http://${process.env.HOST}/${props.roomData.imagePath}) center`,backgroundSize: "cover"}} ></div>
        </div>
        <div className={`${styles.card_data} ${fonts.color_white}`}>
          <div className={`${styles.title_card}`}>
            <span className={`${fonts.Ramillas_500} ${fonts.bold_24}`}>{props.roomData.category}</span>
            <span className={`${fonts.Fors_300} ${fonts.light_18}`}>до <span className={`${styles.price}`}>{props.roomData.price}</span> руб.</span>
          </div>
          <div className={`${styles.description} ${fonts.Fors_300} ${fonts.light_13}`}>

            {props.roomData.descriptionShort.split("/n&").map((str, index) => <div  key={index}> {str} </div>)}

          </div>
          <Link href="/booking" className={`${styles.btn_in_card} ${fonts.Fors_300} ${fonts.light_13} ${fonts.color_white}`}>Узнать больше</Link>
        </div>
      </div>
    </>
  )
}
