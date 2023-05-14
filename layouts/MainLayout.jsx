// Importing the Header and Footer components from the main directory
import { Header, Footer } from "@/components/main";

// Defining the MainLayout component with children as its parameter
const MainLayout = ({ children }) => {
  // Returning the Header component, children wrapped in the main tag with a top padding of 16, and the Footer component
  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

// Exporting the MainLayout component
export default MainLayout;
