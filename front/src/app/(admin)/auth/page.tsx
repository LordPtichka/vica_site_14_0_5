"use client"

import { MouseEvent, useState } from "react"

export default function AuthPage() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  // const auth = async (e: MouseEvent<HTMLButtonElement>) => {
  // e.preventDefault()
  // const dataLog = { Log: login, Pas: password }
  // // console.log(JSON.stringify(dataLog))
  // const resFetch = await fetch("http://localhost:4000/auth", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(dataLog),
  // })
  // const result = await resFetch.json()
  // console.log(await result)
  // Устанавливаем куку с данными
  // document.cookie = `user=${result.secret}; expires = ${getCookieExpirationDate(30)}; path=/`
  // Функция для получения даты истечения срока куки в минутах
  // function getCookieExpirationDate(minutes: number) {
  //   let date = new Date()
  //   date.setTime(date.getTime() + minutes * 60 * 1000)
  //   return date.toUTCString()
  // }
  // console.log(document.cookie.match(/user=(.+?)(;|$)/))
  // }

  return (
    <div>
      <form action="">
        <h1>авторизация</h1>
        {/* <input type="login" placeholder="Введите login:" onChange={(e) => setLogin(e.target.value)} value={login} />
        <input type="text" placeholder="Введите Email:" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={auth}> войти </button> */}
      </form>
    </div>
  )
}
