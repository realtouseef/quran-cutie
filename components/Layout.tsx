import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <main className="flex flex-col h-screen max-w-6xl mx-auto ">
        <Navbar />
        <article className="flex-grow">{children}</article>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
