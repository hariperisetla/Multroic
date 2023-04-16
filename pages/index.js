import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className="">
      <h1>test</h1>
    </main>
  );
};

Home.layout = "MainL";

export default Home;
