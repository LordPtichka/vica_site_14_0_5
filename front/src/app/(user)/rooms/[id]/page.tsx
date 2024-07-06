"use client"

import fonts from "@/component/fonts/Fonts.module.scss"

export default async function ({params}:any, ) {


  return (
    <section className={``}>
        test: {params.id}
    </section>
  )
}
