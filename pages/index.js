import Head from "next/head";
import CameraNotch from "../components/CameraNotch";
import DialpadScreen from "../components/DialpadScreen";
import GitHubLink from "../components/GitHubLink";
import MobileFrame from "../components/MobileFrame";
import StatusBar from "../components/StatusBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Make Voice calls from Web using Twilio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid min-h-screen bg-blue-800 place-items-center">
        <MobileFrame>
          <CameraNotch />
          <StatusBar />
          <DialpadScreen />
        </MobileFrame>
      </div>
      <GitHubLink />
    </div>
  );
}
