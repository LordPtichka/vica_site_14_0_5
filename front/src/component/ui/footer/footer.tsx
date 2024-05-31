import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import vk_com from "@/component/icon/social/vk.svg"
import telegram from "@/component/icon/social/telegram.svg"
import whatsapp from "@/component/icon/social/whatsapp.svg"
import logo_in_footer from "@/component/icon/logo_in_footer.svg"

export default function Footer() { 
      return (
        <section className={styles.footer}>
            <section className={styles.footer_top}>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${fonts.font_for_title} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Отель</li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Номера</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Бронирование</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Банный комплекс</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${fonts.font_for_title} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Номера</li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Стандарт</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Полулюкс</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Люкс</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Пред. Люкс</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Делюкс</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">Аппартаменты</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${fonts.font_for_title} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Рестораны</li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`}  href="https://ibc-victoria.com/restoran-vkus/">Ресторан Вкус</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="https://ibc-victoria.com/monrepa/">Ресторан Монрэпа</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${fonts.font_for_title} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Дополнительно</li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="mailto:reservation@ibc-victoria.com">reservation@ibc-victoria.com</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="https://yandex.ru/maps/-/CCUoM6R6WB" target="_blank">г. Выборг, наб. 40-летия ВЛКСМ, д.1</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="">8 (800) 500-51-74</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="tel:88001005166">8 (800) 100-51-66</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <div className={`${styles.footer_social_block}`}>
                        <Link href={"/"} className={`${styles.social_link} ${styles.footer_icon}`}><Image src={vk_com} alt="vk.com" /></Link>
                        <Link href={"/"} className={`${styles.social_link} ${styles.footer_icon}`}><Image src={telegram} alt="Telegram" /></Link>
                        <Link href={"/"} className={`${styles.social_link} ${styles.footer_icon}`}><Image src={whatsapp} alt="WhatsApp" /></Link> 
                    </div>
                </div>
            </section>
            
            <section className={styles.footer_bottom}>
                <div><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="/content/polzovatelskoe-soglashenie.pdf" target="_blank">© Victoria business hotel 2009 - 2024</a></div>
                <Link href={"/"} className={styles.logo_in_footer}><Image src={logo_in_footer} alt="Главная страница"></Image></Link>
                <div><a className={`${styles.footer_link} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_orange}`} href="/content/politika-konfidencialnosti.pdf" target="_blank">Правовая информация</a></div>
            </section>
        </section>
      )
    }