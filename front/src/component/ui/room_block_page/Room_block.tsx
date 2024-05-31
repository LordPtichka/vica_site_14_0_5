"use client"

import Link from "next/link"
import styles from "./Room_block.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"


export default function Room_block (props:{roomData:[]}) {
  console.log(props.roomData)

  return (
    <div className={`${styles.rooms}`}>
        <div className={`${styles.img_room}`} style={{backgroundImage:`url(http://${process.env.HOST}/${props.roomData.imagePath})`}}></div>
        <div className={`${styles.block_information_room}`}>
        <div className={`${styles.block_text}`}>
            <div className={`${styles.block_description} ${fonts.Ramillas_500} ${fonts.bold_31}`}>
              <span>{props.roomData.category}</span>
              <span>от<span className={`${fonts.color_orange}`}> {props.roomData.price}</span> руб</span>
            </div>
            <div className={`${fonts.Fors_300} ${fonts.light_13}`}>{props.roomData.descriptionFull}</div>
        </div>
        <div className={`${styles.block_data}`}>
            <div className={`${styles.data_content}`}>
            <div className={`${styles.capacity}`}></div>
            <div className={`${styles} ${fonts.Fors_500} ${fonts.light_16}`}>До <span>{props.roomData.capacity}</span> мест</div>
            </div>
              <div className={`${styles.data_content}`}>
              <div className={`${styles.area}`}></div>
              <div className={`${styles} ${fonts.Fors_500} ${fonts.light_16}`}><span>{props.roomData.area}</span><span> м2</span></div>
            </div>
            <Link href="/booking" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}>Забронировать</Link>
        </div>
        </div>
    </div>

  )
}
