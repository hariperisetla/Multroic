import Image from "next/image";
import { Inter } from "next/font/google";
import Gaming from "../assets/img/gaming.svg";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="">
      <div className="bg-purple-100 h-[80vh] pt-16 items-center">
        <div className="container px-16 mx-auto grid h-full grid-cols-2 gap-10 items-center">
          <div className=" space-y-3">
            <h1 className="text-6xl font-montserrat font-extrabold leading-tight text-purple-950">
              Discover and Play Open-Source Games
            </h1>
            <p className="font-medium text-xl text-purple-900 text-justify">
              Join our community of developers and gamers to explore a variety
              of games in your browser or download them to play on your device
            </p>

            <button className="bg-purple-950 text-white px-5 py-3 text-xl font-bold">
              Get Started
            </button>
          </div>
          <div className="relative w-full h-[60vh]">
            <Image
              src={Gaming}
              alt="gaming vector image"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>

      <section className="my-24 space-y-10">
        <h1 className="font-extrabold text-4xl text-purple-950 text-center">
          Features of Multroic
        </h1>
        <div className="container grid grid-cols-3 gap-10 mx-auto">
          <div className="bg-purple-100 p-5 shadow hover:shadow-lg space-y-2">
            <h4 className="font-extrabold text-2xl text-purple-950">Create</h4>
            <p className="font-medium text-purple-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
              blanditiis animi quod fugiat dolore eos fuga ipsam voluptate
              reiciendis hic.
            </p>
          </div>
          <div className="bg-purple-100 p-5 shadow hover:shadow-lg space-y-2">
            <h4 className="font-extrabold text-2xl text-purple-950">Play</h4>
            <p className="font-medium text-purple-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
              blanditiis animi quod fugiat dolore eos fuga ipsam voluptate
              reiciendis hic.
            </p>
          </div>
          <div className="bg-purple-100 p-5 shadow hover:shadow-lg space-y-2">
            <h4 className="font-extrabold text-2xl text-purple-950">
              Collaborate
            </h4>
            <p className="font-medium text-purple-900">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
              blanditiis animi quod fugiat dolore eos fuga ipsam voluptate
              reiciendis hic.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

Home.layout = "MainL";

export default Home;
