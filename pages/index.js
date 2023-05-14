// Importing the 'Hero' and 'Features' components from the '@/components/main' module.
import { Hero, Features } from "@/components/main";

// Defining the 'Home' component as an arrow function.
const Home = () => {
  // The 'Home' component returns a fragment containing the 'Hero' and 'Features' components.
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

// Assigning the 'MainL' layout to the 'Home' component.
Home.layout = "MainL";

// Exporting the 'Home' component as the default export of this module.
export default Home;
