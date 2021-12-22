import Story from "./Story";
import { useSession } from "next-auth/react";
import avatar1 from "../assets/1.png";
import avatar2 from "../assets/2.png";
import avatar3 from "../assets/3.png";
import avatar4 from "../assets/4.png";
import avatar5 from "../assets/5.png";
import avatar6 from "../assets/6.png";
import avatar7 from "../assets/7.png";
import avatar8 from "../assets/8.png";
import avatar9 from "../assets/9.png";
import avatar10 from "../assets/10.png";
import avatar11 from "../assets/11.png";
import avatar12 from "../assets/12.png";

function Stories() {
  const { data: session } = useSession();

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          img={session.user.image}
          username={session.user.username}
          currUser
        />
      )}
      <Story img={avatar1} username="cam42" />
      <Story img={avatar8} username="raffik" />
      <Story img={avatar3} username="brooklyn" />
      <Story img={avatar10} username="jamesjones" />
      <Story img={avatar5} username="leslie.io" />
      <Story img={avatar6} username="surfguru" />
      <Story img={avatar7} username="theresawebb" />
      <Story img={avatar2} username="katem88" />
      <Story img={avatar9} username="itsalflores" />
      <Story img={avatar4} username="guyhawkings" />
      <Story img={avatar11} username="floydmiles" />
      <Story img={avatar12} username="travel4ever" />
    </div>
  );
}

export default Stories;
