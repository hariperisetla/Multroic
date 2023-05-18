import UserProvider from "@/context/UserContext";
import { DashboardLayout, MainLayout } from "@/layouts";
import "@/styles/globals.css";

const layouts = {
  MainL: MainLayout,
  DashboardL: DashboardLayout,
};

export default function App({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    ((page) => {
      page;
    });

  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
