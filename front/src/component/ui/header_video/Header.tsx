"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./Header.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Victoria_logo from "@/component/icon/Victoria_logo.svg"
import iconContact from "@/component/icon/contacts_icon.svg"


export default function Header() {
  return (
    <div className={styles.header_wrap}>
      <header className={styles.header}>
        <Link href="/"><Image src={Victoria_logo} alt="Home"/></Link> 

        <div className={styles.header_block_link}>
          <Link href="/" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Главная</Link>
          <Link href="/rooms" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Номера</Link>
          <Link href="/stocks" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Акции</Link>
          <Link href="/contacts" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Контакты</Link>
          <Link href="/restourans" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Рестораны</Link>
          {/* <Link href="/news" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Новости</Link> */}
        </div>
        <div className={`${styles.btn_block}`}>
        <Link href="/booking" className={`${styles.btn_link_contacts}`}>
            <div className={styles.svg_contact} style={{maskImage:`url(${iconContact.src})`}} ></div>
          </Link>
          <Link href="/booking" className={`${styles.btn_link} ${fonts.Fors_300} ${fonts.color_white} ${fonts.light_16}`}>Онлайн бронирование</Link>
        </div>
      </header>
    </div>
  )
}
