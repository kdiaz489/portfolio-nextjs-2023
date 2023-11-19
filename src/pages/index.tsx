import type { NextPage } from "next";
import Nav from "../components/NavBar";
import Header from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow
  // new custom colors: rust, sage
  // edit this variable to change the color theme


  const { colorMode, toggleColorMode } = useColorMode()
  const color = 'rust' ;
  return (
    <>
    <Head>
      <title>Karen&apos;s personal website</title>
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
    </Head>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Experience color={color} />
      {/* <Projects color={color} /> */}
      <Contact color={color} />
    </>
  );
};

export default Home;
