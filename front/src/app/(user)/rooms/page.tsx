"use client"

import Room_block from "@/component/ui/room_block_page/Room_block"
import styles from "./Rooms_page.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"

async function getStaticProps() {
  const res = await fetch(`http://${process.env.HOST}/room/all`, {
    cache: "force-cache",
    next: {
      revalidate: 1000
    }
  }
  )
  const data = await res.json()
  console.log(await data)

  // props: { dataRooms: data }

  return data



}

export default async function () {

  // console.log(getStaticProps())

  return (
    <section className={``}>
      <section className={`${styles.head_page}`}>
        <div className={`${styles.cookies} ${fonts.Fors_300} ${fonts.light_13}`}><span>Главная</span><span>/</span><span className={`${fonts.Fors_500} ${fonts.color_orange}`}>Номера</span></div>
        <div className={`${styles.title_page} ${fonts.Ramillas_500} ${fonts.title_48}`}>Номера</div>
      </section>

      <section className={`${styles.block_rooms}`}>

        {(await getStaticProps()).length ? (await getStaticProps()).map((obj) => <Room_block key={obj.id} roomData={obj}/> ) : <div>Номеров нету</div>}

      </section>

    </section>
  )
}
