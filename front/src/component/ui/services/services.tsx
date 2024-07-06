"use client"

import Link from "next/link"
import styles from "./Services.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"
import { useEffect } from "react"
import { count } from "console"


export default function Services(props:{serviceData:[]}) {

    useEffect(() => {}, [])


    const OpenPopupCarousel = (data:string) => {

        const popup = document.querySelector("#popup_carousel")


    
        popup.style.display = 'flex'
  
        
        
        popup.querySelector("#carousel_linear").innerHTML = ""
        // console.log(popup.querySelector("#carousel_linear"))
        const imgParsCarousel = (obj) => {
            console.log(obj)
    
          popup.querySelector("#title").innerHTML = obj.title
          popup.querySelector("#sub_title").innerHTML = ""
          popup.querySelector("#description").innerHTML =  obj.description


        //   popup.querySelector("#popup_carousel_text").style.cssText = `display: none`
      
    
          let countWidth = 0
          const arrImgPath = obj.imagePath.split(` /n&img& `) // паршу на массив путей у фото
          arrImgPath.forEach(element => {
            //формирую карусель из фото в попапе
            element.length > 0 ? ((popup?.querySelector("#carousel_linear")?.insertAdjacentHTML("beforeend", `<div style="background-image:url(http://${process.env.HOST}/${element})"></div>`)), countWidth++ ): null
          });
          popup.querySelector("#carousel_linear").style.cssText = `width: ${760*countWidth}px`
        }
    
        props.serviceData.find(obj => {
        //   console.log(obj)
          if (obj.title == data) return imgParsCarousel(obj)
        });
    }


    return (
        <section className={`${styles.services}`}>
            <div className={`${styles.title} ${fonts.Ramillas_500} ${fonts.title_48}`}>Услуги</div>
            <div className={`${styles.grid_services}`}>
                <div className={`${styles.block_service}`} onClick={() => {OpenPopupCarousel("Банный комплекс")}} >
                    <div className={`${styles.img_service_block}`}>
                        <div id={styles.bc} className={`${styles.img_service}`}></div>
                        <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Посмотреть фото ресторана</div>
                    </div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`} >Банный комплекс</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с полезными для здоровья процедурами!</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>

                <div className={`${styles.block_service}`} onClick={() => {OpenPopupCarousel("Фитнес-зал")}} >
                    <div className={`${styles.img_service_block}`}>
                        <div className={`${styles.img_service}`}></div>
                        <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Посмотреть фото ресторана</div>
                    </div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Фитнес-зал</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>В здании комплекса расположен тренажерный залплощадью 100 кв. м. Зал оснащен вытяжкой и кондиционерами, просторными раздевалками с душевыми и финской сауной.</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>
                
                <div className={`${styles.block_service}`} onClick={() => {OpenPopupCarousel("Конференц-залы")}}>
                    <div className={`${styles.img_service_block}`}>
                        <div id={styles.knf} className={`${styles.img_service}`}></div>
                        <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Посмотреть фото ресторана</div>
                    </div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Конференц-залы</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с полезными для здоровья процедурами!</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>

                <div className={`${styles.block_service}`} onClick={() => {OpenPopupCarousel("Трансфер")}}>
                    <div className={`${styles.img_service_block}`}>
                        <div className={`${styles.img_service}`}></div>
                        <div className={`${styles.text_in_img} ${fonts.Fors_300} ${fonts.light_16} ${fonts.color_white}`}>Посмотреть фото ресторана</div>
                    </div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Трансфер</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с полезными для здоровья процедурами!</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>
            </div>
        </section>
    )
  }