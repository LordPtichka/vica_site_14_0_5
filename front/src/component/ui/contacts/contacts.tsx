"use client"

import Link from "next/link"
import styles from "./Contacts.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
// import { YMaps } from '@pbe/react-yandex-maps' 

export default function Contacts() {
  return (
    <section className={`${styles.contacts}`}>
        <section className={`${styles.contact_data}`}> 
            <div className={`${styles.title_contacts} ${fonts.Ramillas_500} ${fonts.title_48}`}>Контакты</div>
            <div>
                <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Набережная 40-летия ВЛКСМ, д.1, г. Выборг, 188800,</div>
                <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Ленинградская область, Российская Федерация.</div>
                <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Отель находиться в исторической части города</div>
            </div>
            <div>
                <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Почта для обращений:</div>
                <div className={`${fonts.Fors_300} ${fonts.light_16}`}><Link className={`${styles.email} ${fonts.color_orange}`} href="mailto:info@ibc-victoria.com">info@ibc-victoria.com</Link></div>
            </div>
            <Link className={`${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`} href={"/contacts"}><div className={styles.btn_contact_list}>Список контактов</div></Link>
        </section>
        
        <section className={`${styles.contact_map}`}>
            <div className={`${styles.yandex_map} ${fonts.color_white}`}>

                <div style={{position:"relative",overflow:"hidden",borderRadius:"20px", height:"100%", width:"100%"}}>
                    <Link href="https://yandex.ru/maps/org/viktoriya/1048243753/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"0px"}}>
                        Виктория
                    </Link>
                    <Link href="https://yandex.ru/maps/969/vyborg/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>
                        Гостиница в Выборге
                    </Link>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=28.741286%2C60.714813&mode=poi&poi%5Bpoint%5D=28.740237%2C60.714133&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1048243753&source=serp_navig&z=13.87" width="100%" height="100%" frameBorder="1" allowFullScreen={true} style={{position:"relative"}} loading="lazy"></iframe>
                </div>
            </div>
        </section>

    </section>
  )
}