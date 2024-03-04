import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-[#010001] min-h-screen text-white ">
      <nav className="w-full flex flex-row justify-between items-center  py-8  px-20">
        <img src="./logo.svg" alt="" width={200} height={200} />
        <div className="w-fit flex flex-row items-center gap-8 text-lg">
          <Link
            href="https://docs.magicblock.gg/"
            target="_blank"
            className="bg-white text-black hover:bg-gray-400 hover:text-black px-3 py-2 rounded-lg font-semibold text-lg"
          >
            Start Building
          </Link>
        </div>
      </nav>
      <div className="w-full flex flex-row justify-between items-center pt-10 pb-20 px-20">
        <div className="w-[50%] flex flex-col gap-5">
          <h2 className="font-bold text-[60px] gradient-text ">
            BOLT engine - unstoppable and composable games
          </h2>
          <h3 className="text-[20px]">
            A Framework for Permissionless,
            <br /> Composable, and Everlasting Onchain Games
          </h3>
          <Link
            href="https://docs.magicblock.gg/"
            target="_blank"
            className="bg-white py-[20px] px-4 w-[40%] text-black text-center hover:bg-gray-400 hover:text-black gradient-border font-semibold text-lg "
          >
            Start Building
          </Link>
        </div>
        <img src="./bolts.png" alt="bolt png" className="w-[50%] h-[50%]" />
      </div>

      <h2 className="text-[50px] text-center font-black px-20">
        {" "}
        <span className="gradient-text font-black">BOLT</span> Properties
      </h2>
      <div className="w-full flex flex-row gap-8 py-20 px-20">
        <div className="flex flex-col gap-6 items-center">
          <img src="./Integrate.png" alt="" className="w-20 h-20" />
          <h3 className="text-2xl font-semibold text-center">
            Entity Component System (ECS)
          </h3>
          <span className="text-base ">
            BOLT utilizes an ECS pattern for organizing code and data, promoting
            modularity and extendibility in blockchain game development.
          </span>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <img src="./Access.png" alt="" className="w-20 h-20" />
          <h3 className="text-2xl font-semibold text-center">
            SVM-Compatible Acceleration Layer
          </h3>
          <span className="text-base ">
            Enhance the performance of fully onchain (FOC) games on Solana with
            an acceleration layer, bringing it on par with traditional
            multiplayer game servers.
          </span>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <img src="./Onboard.png" alt="" className="w-20 h-20" />
          <h3 className="text-2xl font-semibold text-center ">BOLT CLI </h3>
          <span className="text-base ">
            An extension of the Anchor framework, BOLT CLI simplifies the
            development process by providing functionalities for creating world
            instances, components, and systems.
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-10 items-center px-20">
        <h2 className="text-[60px] text-center font-bold"> Get Started </h2>
        <div className="w-[60%] flex flex-col gap-4 bg-131417 p-5 rounded-xl border-[1px] border-gray-100">
          <span className="text-green-700">{"//"}Install BOLT CLI</span>
          <span className="text-[#da66e9]">
            npm install @magicblock-labs/bolt-cli
          </span>
          <span className="text-green-700">{"//"} Verify installation</span>
          <span className="text-[#da66e9]">bolt -h</span>
          <span className="text-green-700">{"//"} Create a new workspace</span>
          <span className="text-[#da66e9]">bolt init new-workspace-name</span>
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 items-center pt-20 pb-20  px-20">
        <h2 className="text-[40px] text-center font-bold">
          Learn and Buid More
        </h2>
        <Link
          href="https://blog.magicblock.gg/bolt-v0.1/"
          target="_blank"
          className="bg-white py-[20px] px-4 w-[20%] text-center text-black hover:bg-gray-400 hover:text-black gradient-border font-semibold text-lg "
        >
          Visit BOLT Blog
        </Link>
      </div>

      <div className="flex flex-col w-full gap-5 bg-[#111315] pt-8 pb-20 px-20 items-center">
        <img src="./logo.svg" alt="" width={200} height={200} />A quick website
        made by Oleanji, not really showing Frontned skills but showing how fast
        i am, react and a little of my skills
      </div>
    </main>
  );
}
