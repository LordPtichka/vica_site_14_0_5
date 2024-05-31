import Link from "next/link"
import styles from "./Contacts.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"

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
            <div className={`${styles.yandex_map} ${fonts.color_white}`}>YANDEX MAP</div>
        </section>
    </section>
  )
}