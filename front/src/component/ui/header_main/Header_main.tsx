"use client"

import Link from "next/link"
import Image from "next/image"
import styles from "./Header_main.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Victoria_logo_balck from "@/component/icon/Victoria_logo_black.svg"
import { useEffect } from "react"
import iconContact from "@/component/icon/contacts_icon.svg"

export default function Header_main() {



  useEffect(() => {
    
    window.addEventListener('scroll', function () {
      const element = document.querySelector("#testScroll"); // Замените 'yourElementId' на ID вашего элемента
      const boundingClientRect = element.getBoundingClientRect(); // Получаем размеры и позицию элемента
      // console.log(boundingClientRect); // выводится вся инфа о позиции элемента

      if (boundingClientRect.top < 100) {
        document.querySelector("#header_scroll").style.transform = 'translateY(20px)'
      } else {
        document.querySelector("#header_scroll").style.transform = 'translateY(-200px)'
      }
    });
  })



  return (
    <div id="header_scroll" className={styles.header_wrap}>
      <header className={styles.header}>
        <Link href="/"><Image src={Victoria_logo_balck} alt="Home"/></Link> 

        <div className={styles.header_block_link}>
          <Link href="/" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Главная</Link>
          <Link href="/rooms" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Номера</Link>
          <Link href="/stocks" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Акции</Link>
          <Link href="/contacts" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Контакты</Link>
          <Link href="/restourans" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Рестораны</Link>
          {/* <Link href="/news" className={`${styles.text_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Новости</Link> */}
        </div>
        <div className={`${styles.btn_block}`}>
          <Link href="/booking" className={`${styles.btn_link_contacts}`}>
            <div className={styles.svg_contact} style={{maskImage:`url(${iconContact.src})`}} ></div>
          </Link>
          <Link href="/booking" className={`${styles.btn_link} ${fonts.Fors_300} ${fonts.color_black} ${fonts.light_16}`}>Онлайн бронирование</Link>
        </div>
      </header>
    </div>
  )
}
