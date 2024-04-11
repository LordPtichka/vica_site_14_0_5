import Link from "next/link"
import styles from "./Home.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Traveline from "@/component/ui/traveline/Traveline"
import { GetStaticProps, NextPage } from "next"
import Stock from "@/component/ui/stocks/Stock"
import Restaurant from "@/component/ui/restaurant/Restaurant"
import Footer from "@/component/ui/footer/footer"
// import GetRoom from "@/interface/getRoom"

export default function Home() {
  return (
    <>
      <div className={styles.video_wrap}>
        {/* <video className={styles.video_wallpaper} autoPlay src={`http://172.20.10.2:4000/video/video_promo.mp4`} loop muted playsInline></video> */}
        <video className={styles.video_wallpaper} autoPlay src={`http://${process.env.HOST}/video/video_promo.mp4`} loop muted playsInline></video>
      </div>

      <div className={styles.section_preview}>
        <div className={styles.title}>
          <span className={`${fonts.Ramillas_400}`}>
            <b className={` ${styles.text_victoria}`}>Victoria</b>
            <b className={` ${styles.text_White}`}>
              - Будь в центре <br/> истории и комфорта
            </b>
          </span>
        </div>

        <div>
          <Link href="/booking">
            <div className={`${fonts.Fors_300} ${styles.but_orange}`}>Найти номер</div>
          </Link>
        </div>
      </div>
      <main>
        <Traveline />
        <Stock />
        <Restaurant />
        <Footer />
      </main>
    </>
  )
}
