"use client"
import fonts from "@/component/fonts/Fonts.module.scss"
import styles from "./Restaurant.module.scss"
import { useEffect } from "react"
import Link from "next/link"

export default function Restaurant(props:{serviceData:[]}) {



  useEffect(() => {}, [])

  const OpenPopupCarousel = (data:string) => {

    const popup = document.querySelector("#popup_carousel")


    popup.style.display = 'flex'
    console.log(data)

    
    
    popup.querySelector("#carousel_linear").innerHTML = ""
    const imgParsCarousel = (obj) => {


      popup.querySelector("#title").innerHTML = obj.title
      popup.querySelector("#sub_title").innerHTML = "РЕСТОРАН НА 7 ЭТАЖЕ"
      popup.querySelector("#description").innerHTML = obj.description


      let countWidth = 0
      const arrImgPath = obj.imagePath.split(` /n&img& `) // паршу на массив путей у фото
      arrImgPath.forEach(element => {
        // console.log(element) //формирую карусель из фото в попапе
        element.length > 0 ? (popup?.querySelector("#carousel_linear")?.insertAdjacentHTML("beforeend" , `<div style="background-image:url(http://${process.env.HOST}/${element})"></div>`),  countWidth++ ) : null
      });
      popup.querySelector("#carousel_linear").style.cssText = `width: ${760*countWidth}px`
      console.log(popup.querySelector("#carousel_linear"))
    }

    props.serviceData.find(obj => {
      console.log(obj.title)
      if (obj.title == data) return imgParsCarousel(obj)
    });
  }


  return (
    <section className={`${styles.restaurants}`}>
      <section className={`${styles.block_restaurant}`}>
        <div className={`${styles.img_rest_block}`}>
          <div id={styles.vkus} className={`${styles.img_rest}`}></div>
          <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`} onClick={() => {OpenPopupCarousel("ВКУС")}} >Посмотреть фото ресторана</div>
        </div>
        <div className={`${styles.block_information}`}>
          <div className={`${styles.block_text}`}>
            <div className={`${styles.title_rest} ${fonts.Ramillas_500} ${fonts.title_48} ${fonts.color_orange}`}>Вкус</div>
            <div className={`${styles.title_h3} ${fonts.Fors_500} ${fonts.bold_20}`}>Ресторан на 7 этаже</div>
            <div className={`${styles.text_of_rest} ${fonts.Fors_300} ${fonts.light_16}`}>Открытая летняя терраса, с панорамным видом на старый город. Закаты на нашей террасе особенно впечатляют. Обширная винная карта и обновленное меню, а также прекрасная пицца в неаполитанском стиле ждут вас.</div>
          </div>
          <div className={`${styles.block_time_and_btn}`}>
            <div className={`${styles.block_time}`}>
              <div className={`${fonts.Ramillas_500} ${fonts.light_16}`}>Время работы:</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Пн - Пт: 12:00 - 00:00</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Сб - Вс: 12:00 - 00:00</div>
            </div>
            <div className={`${styles.block_btn}`}>
              <Link href="https://drive.google.com/file/d/1gWe6x31bEhxzSSeSzBIR_NxnAo4jNRnw/view" target="_blank" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Посмотреть меню</div></Link>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Подробнее</div></Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.block_restaurant}`}>
        <div className={`${styles.block_information}`}>
          <div className={`${styles.block_text}`}>
            <div className={`${styles.title_rest} ${fonts.Ramillas_500} ${fonts.title_48} ${fonts.color_orange}`} >Монрэпа</div>
            <div className={`${styles.title_h3} ${fonts.Fors_500} ${fonts.bold_20}`}>Ресторан для завтраков</div>
            <div className={`${styles.text_of_rest} ${fonts.Fors_300} ${fonts.light_16}`}>Окунитесь в теплую, непринужденную атмосферу семейного ресторана “Монрэпа”, насладитесь видом на бухту Салакка-Лахти из панорамных окон. Завтрак в ресторане проходит в формате «Шведский стол» с 7:30 до 10:00 в будние дни, с 7:30 до 11:00 в выходные и праздничные дни.</div>
          </div>
          <div className={`${styles.block_time_and_btn}`}>
            <div className={`${styles.block_time}`}>
              <div className={`${fonts.Ramillas_500} ${fonts.light_16}`}>Время работы:</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Пн - Пт: 12:00 - 22:00</div>
              <div className={`${fonts.Fors_300} ${fonts.light_16}`}>Сб - Вс: 12:00 - 22:00</div>
            </div>
            <div className={`${styles.block_btn}`}>
              <Link href="https://drive.google.com/file/d/1vq0J1fn6QeYhqjXlZNJHD5K_4dYVag2N/view" target="_blank" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Посмотреть меню</div></Link>
              <Link href="/restourans" className={`${styles.btn} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_black}`}><div>Подробнее</div></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.img_rest_block}`}>
          <div id={styles.monrepa} className={`${styles.img_rest}`}></div>
          <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`} onClick={() => {OpenPopupCarousel("монрепа")}}>Посмотреть фото ресторана</div>
        </div>
      </section>
    </section>
  )
}
