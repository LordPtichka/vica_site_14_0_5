import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col">
        <Link href="/test">Номера</Link>
        <Link href="/news">Новости</Link>

        <Link href="/auth">Авторизация</Link>

        <Link href="/test">Рестораны</Link>
        <Link href="/test">Услуги</Link>
        <Link href="/test">Бронирование</Link>
      </div>
    </main>
  )
}
