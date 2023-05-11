import Image from "next/image";
import { Inter } from "next/font/google";
import Gaming from "../assets/img/gaming.svg";
import CreateImg from "../assets/img/create.svg";
import PlayImg from "../assets/img/play.svg";
import CollaborateImg from "../assets/img/collaborate.svg";
import Features from "@/components/Layouts/Main/Features";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div>
      <div className="text-center h-[100vh] md:h-[100vh] items-center bg-image bg-cover bg-no-repeat bg-fixed">
        <div className="container px-5 md:pt-0 md:px-16 mx-auto flex max-w-screen-lg h-full items-center">
          <div className="space-y-5">
            <h1 className="text-4xl md:text-7xl bg-custom-gradient text-transparent bg-clip-text font-montserrat font-extrabold leading-tight">
              Discover and Play Open-Source Games
            </h1>
            <p className="font-medium text-2xl">
              Join our community of developers and gamers to explore a variety
              of games in your browser or download them to play on your device!
            </p>  

            <button className="bg-custom-gradient text-black px-5 py-3 text-2xl font-bold">
              Get Started
            </button>
          </div>
          {/* <div className="relative w-full h-80 md:h-[60vh]">
            <Image
              src={Gaming}
              alt="gaming vector image"
              fill
              className="object-contain object-center"
            />
          </div> */}
        </div>
      </div>

      <Features />
    </div>
  );
};

Home.layout = "MainL";

export default Home;
