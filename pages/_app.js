import { MainLayout } from "@/layouts";
import "@/styles/globals.css";

const layouts = {
  MainL: MainLayout,
};

export default function App({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    ((page) => {
      page;
    });

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
