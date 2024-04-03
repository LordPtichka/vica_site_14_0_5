import Link from "next/link"
import styles from "./Home.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Traveline from "@/component/ui/traveline/Traveline"

export default function Home() {
  return (
    <>
      <div className={styles.video_wrap}>
        <video className={styles.video_wallpaper} autoPlay src={`http://localhost:4000/video/video_promo.mp4`} loop muted playsInline></video>
      </div>

      <section className={styles.section_preview}>
        <div className={styles.title}>
          <span className={`${fonts.Ramillas_400}`}>
            <b className={` ${styles.text_victoria}`}>Victoria</b>
            <b className={` ${styles.text_White}`}>
              - Будь в центре <br /> истории и комфорта
            </b>
          </span>
        </div>

        <div>
          <Link href="/booking">
            <div className={`${fonts.Fors_300} ${styles.but_orange}`}>Найти номер Search</div>
          </Link>
        </div>
      </section>

      <Traveline />
    </>
  )
}
