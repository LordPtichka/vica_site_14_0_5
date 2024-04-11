import styles from "./Footer.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"

export default function Footer() { 
      return (
        <section className={styles.footer}>
            <section className={styles.footer_top}>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title}`} font-for-title>Отель</li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="">Номера</a></li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="">Бронирование</a></li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="">Банный комплекс</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li class="footer_nav_title font-for-title">Рестораны</li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="https://ibc-victoria.com/restoran-vkus/">Ресторан Вкус</a></li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="https://ibc-victoria.com/monrepa/">Ресторан Монрэпа</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li class="footer_nav_title font-for-title">Дополнительно</li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="">Контакты</a></li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="">Бронирование</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${fonts.no_title}`}>Адрес</li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="mailto:reservation@ibc-victoria.com">reservation@ibc-victoria.com</a></li>
                        <li class="footer_nav_menu"><a class="font-for-link font-color-orange" href="https://yandex.ru/maps/-/CCUoM6R6WB" target="_blank">г. Выборг, наб. 40-летия ВЛКСМ, д.1</a></li>
                    </ul>
                </div>
                <div className={styles.footer_nav}>
                    <ul>
                        <li className={`${styles.footer_nav_title} ${styles.no_title}`} >Телефоны</li>
                        <li className={styles.footer_nav_menu}><a className={`${fonts.font_for_link} ${fonts.font_color_orange}`} href="">8 (800) 500-51-74</a></li>
                        <li className={styles.footer_nav_menu}><a className={`${fonts.font_for_link} ${fonts.font_color_orange}`} href="tel:88001005166">8 (800) 100-51-66</a></li>
                    </ul>
                </div>
            </section>
            <section className={styles.footer_nav}>
                <div><a className={`${fonts.Fors_300} ${fonts.font_color_orange}`} href="/content/polzovatelskoe-soglashenie.pdf" target="_blank">© Victoria business hotel 2009 - 2023</a></div>
                <a href=""><div className={styles.logo_in_footer}></div></a>
                <div><a className={`${fonts.Fors_300} ${fonts.font_color_orange}`} href="/content/politika-konfidencialnosti.pdf" target="_blank">Правовая информация</a></div>
            </section>
        </section>
      )
    }