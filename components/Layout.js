import Navbar from "./Navbar";
import Footer from './Footer';
import Head from "next/head";
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>TreeDom</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/litera/bootstrap.css"
        />
      </Head>
      <Navbar id="top"/>
      {props.children}
      <Footer/>
    </div>
  );
};

export default Layout;
