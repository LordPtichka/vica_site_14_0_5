import Link from "next/link"
import styles from "./Services.module.scss"
import fonts from "@/component/fonts/Fonts.module.scss"


export default function Services() {
    return (
        <section className={`${styles.services}`}>
            <div className={`${styles.title} ${fonts.Ramillas_500} ${fonts.title_48}`}>Услуги</div>
            <div className={`${styles.grid_services}`}>
                <div className={`${styles.block_service}`}>
                    <div className={`${styles.img_service}`}></div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Банный комплекс</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с полезными для здоровья процедурами!</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>

                <div className={`${styles.block_service}`}>
                    <div className={`${styles.img_service}`}></div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Фитнес-зал</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>В здании комплекса расположен тренажерный залплощадью 100 кв. м. Зал оснащен вытяжкой и кондиционерами, просторными раздевалками с душевыми и финской сауной.</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>
                
                <div className={`${styles.block_service}`}>
                    <div className={`${styles.img_service}`}></div>
                    <div className={`${styles.name_service} ${fonts.Ramillas_500} ${fonts.bold_20}`}>Конференц-залы</div>
                    <div className={`${styles.block_info_service}`}>
                        <div className={`${styles.text_service} ${fonts.Fors_300} ${fonts.light_13}`}>Банный комплекс дарит красоту, молодость, здоровье и хорошее настроение! Это прежде всего, ни с чем несравнимое удовольствие, а также масса вариантов совместить приятный отдых с полезными для здоровья процедурами!</div>
                        <div className={`${styles.btn_service} ${fonts.Fors_300} ${fonts.light_13}`}>Подробнее</div>
                    </div>
                </div>

                <div className={`${styles.block_service}`}>
                    <div className={`${styles.img_service}`}></div>
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