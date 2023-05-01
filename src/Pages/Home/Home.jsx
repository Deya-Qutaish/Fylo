import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import Productive from "../../components/Productive/Productive";
import Comments from "./../../components/Comments/Comments";
import Email from "../../components/Email/Email";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="body-container">
        <Header />
        <Features />
        <Productive />
        <Comments />
      </div>
      <Footer />
    </>
  );
};

export default Home;
