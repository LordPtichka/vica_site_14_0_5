import styles from "./Home.module.scss"

export default function Home() {
  return (
    <div>
      <video className={styles.video_wallpaper} src={`http://localhost:4000/video/video_promo.mp4`} loop muted playsInline></video>
      {/* autoPlay */}
    </div>
  )
}
