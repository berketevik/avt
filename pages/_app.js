import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import "../public/css/basic.css";
import "../public/css/layout.css";
import "../public/css/blogs.css";
import "../public/css/ionicons.css";
import "../public/css/magnific-popup.css";
import "../public/css/animate.css";
import "../public/css/gradient.css";
import  "../public/css/new-skin/new-skin.css";
import "../public/css/demos/demo-6-colors.css";

function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display"
          rel="stylesheet"
        />
        {/* <link rel="stylesheet" href={basic} />
        <link rel="stylesheet" href={layout} />
        <link rel="stylesheet" href={blogs} />
        <link rel="stylesheet" href={ionicons} />
        <link rel="stylesheet" href={magnific} />
        <link rel="stylesheet" href={animate} />
        <link rel="stylesheet" href={gradient} /> */}

        <title>Aziz Volkan Tevik - CV</title>
        <link rel="shortcut icon" href="images/favicons/favicon.ico" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
