import LovePlayht from "./components/LovePlayht/LovePlayht"


import "../styles/globals.module.css"
import TryFree from "./components/TryFree/TryFree"
import FindVoice from "./components/FindVoice/FindVoice"
import MoreReviews from "./components/MoreReviews/MoreReviews"
// import AudioPlayer, { VoiceCard } from "./components/VoiceComponent/viceCard"


const Home = () => {
  return (
    <>
      <LovePlayht />
      {/* <AudioPlayer /> */}
      <TryFree />
      <FindVoice />
      <MoreReviews />
    </>
  )
}

export default Home 