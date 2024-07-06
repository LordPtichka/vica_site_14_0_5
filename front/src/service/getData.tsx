export default getAllRoom = async() => {
    const res = await fetch(`http://${process.env.HOST}/room/all`, {
        cache: "force-cache",
        next: {
          revalidate: 1000
        }
    })
    const data = await res.json()
    console.log(await data)

    return { dataRooms: { data } };
}
