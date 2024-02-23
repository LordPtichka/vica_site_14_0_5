"use client"

import Link from "next/link"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <div className={styles.header_wrap}>
      <header className={styles.header}>
        <Link href="/test" className={styles.logo_link}>
          <img src="/logo1.svg" alt="" />
        </Link>

        <div className={styles.header_block_link}>
          <Link href="/test" className={styles.text_link}>
            Главная
          </Link>
          <Link href="/news" className={styles.text_link}>
            Номера
          </Link>
          <Link href="/test" className={styles.text_link}>
            Акции
          </Link>
          <Link href="/test" className={styles.text_link}>
            Контакты
          </Link>
          <Link href="/test" className={styles.text_link}>
            Рестораны
          </Link>
          <Link href="/test" className={styles.text_link}>
            Новости
          </Link>
        </div>
        <Link href="/test" className={styles.btn_link}>
          Онлайн бронирование
        </Link>
      </header>
    </div>
  )
}
