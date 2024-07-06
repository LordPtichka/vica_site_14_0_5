import Link from "next/link"
import styles from "./Home.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import Header from "@/component/ui/header_video/Header"
import Traveline from "@/component/ui/traveline/Traveline"
import Stock from "@/component/ui/stocks/Stock"
import Rooms from "@/component/ui/rooms/Rooms"
import Restaurant from "@/component/ui/restaurant/Restaurant"
import Services from "@/component/ui/services/services"
import Contacts from "@/component/ui/contacts/contacts"
import Footer from "@/component/ui/footer/footer"

import { NextPageContext } from 'next'
import Popup from "@/component/ui/popup/Popup"
import Header_main from "@/component/ui/header_main/Header_main"
import Popup_carousel from "@/component/ui/popup_carousel/Popup_carousel"
 

async function getStaticProps() {
  const res = await fetch(`http://${process.env.HOST}/news/all`, {
    cache: "force-cache",
    next: {
      revalidate: 10
    }
  }
  )
  const data = await res.json()
  return data
}

async function getAllRoom() {
  const res = await fetch(`http://${process.env.HOST}/room/all`, {
    cache: "force-cache",
    next: {
      revalidate: 10
    }
  }
  )
  const data = await res.json()
  return data
}

async function getAllService() {
  const res = await fetch(`http://${process.env.HOST}/service/all`, {
    cache: "force-cache",
    next: {
      revalidate: 10
    }
  }
  )
  const data = await res.json()
  return data
}


export default async function Home() {


  return (
    <>
    <Header_main />
    <Header />

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
      <main id="testScroll">
        <Traveline />
        <Stock test={await getStaticProps()} />
        <Rooms roomData={await getAllRoom()}/>
        <Restaurant serviceData={await getAllService()}/>
        <Services serviceData={await getAllService()}/>
        <Contacts />
        <Footer />
        <Popup />
        <Popup_carousel />
      </main>
    </>
  )
}

