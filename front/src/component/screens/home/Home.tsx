import Link from "next/link"
import styles from "./Home.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Traveline from "@/component/ui/traveline/Traveline"
import { GetStaticProps, NextPage } from "next"
import Stock from "@/component/ui/stocks/Stock"
import Rooms from "@/component/ui/rooms/Rooms"
import Restaurant from "@/component/ui/restaurant/Restaurant"
import Contacts from "@/component/ui/contacts/contacts"
import Footer from "@/component/ui/footer/footer"
// import GetRoom from "@/interface/getRoom"

export default function Home() {
  return (
    <>
      <div className={styles.video_wrap}>
        <video className={styles.video_wallpaper} autoPlay src={`http://${process.env.HOST}/video/video_promo.mp4`} loop muted playsInline></video>
      </div>

      <div className={styles.section_preview}>
        <div className={styles.title}>
          <span className={`${styles.title_text} ${styles.no_select}`}>
            <b className={`${fonts.Ramillas_400} ${fonts.color_orange}`}>Victoria</b>
            <b className={`${fonts.Ramillas_400} ${fonts.color_white}`}> - Будь в центре <br/> истории и комфорта</b>
          </span>
        </div>

        <div>
          <Link href="/booking"><div className={`${styles.btn_orange} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Найти номер</div></Link>
        </div>
      </div>
      <main>
        <Traveline />
        <Stock />
        <Rooms />
        <Restaurant />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}
