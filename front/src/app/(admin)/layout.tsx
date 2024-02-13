import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "auth admin",
  description: "auth admin",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("document.cookie")

  return <div className="test">{children}</div>
}
