// import Home from "@/component/screens/home/Home"

export default function GetRoom() {
  const getRoom = async () => {
    const req = await fetch("http://localhost:4000/room/all")
    const data = await req.json()
    console.log(await data)
  }
  getRoom()

  return <div></div>
}
