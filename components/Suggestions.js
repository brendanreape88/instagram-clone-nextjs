import Suggestion from "./Suggestion";
import avatar13 from "../assets/13.png";
import avatar14 from "../assets/14.png";
import avatar15 from "../assets/15.png";
import avatar16 from "../assets/16.png";
import avatar17 from "../assets/17.png";

function Suggestions() {
  const avatars = [avatar13, avatar14, avatar15, avatar16, avatar17];

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      <Suggestion img={avatar13} username="janecooper" company="Microsoft" />
      <Suggestion img={avatar14} username="cryptopunk1010" company="Coinbase" />
      <Suggestion img={avatar15} username="svan79" company="Savannah Realty" />
      <Suggestion
        img={avatar16}
        username="toddbrinks"
        company="Uptown Design"
      />
      <Suggestion img={avatar17} username="darrellw90" company="Alphabet" />
    </div>
  );
}

export default Suggestions;
