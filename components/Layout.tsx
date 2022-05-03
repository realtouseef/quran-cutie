import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <main className="mx-auto flex h-screen max-w-6xl flex-col px-4 md:px-0">
        <Navbar />
        <article className="flex-grow">{children}</article>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
