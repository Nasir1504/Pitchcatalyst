import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DemoPitchDeck from "./Pitch-Deck-Demo/demo-pitch-deck";

// styles
import "./App.scss";

// components
import NavbarComp from "./components/NavBar-Comp/navbar-comp";
import FooterComp from "./components/Footer-Comp/footer-comp";
import MaskedComp from "./components/Masked-comp/masked-comp";
import ThankYouPage from "./pages/Thank-You-Page";
import ScrollDownComp from "./components/Scroll-Down-Comp/scroll-down-comp";

// pages
import HomePage from "./pages/Home-Page/home-page";
import TeamUp from "./pages/Team-Up/team-up";
import AboutUsPage from "./pages/About-Us-Page/about-us-page";
import BlogPage from "./pages/Blog-Page/blog-page";
import IndividualBlogsComp from "./pages/Blog-Page/Individual-Blog-Comp/individual-blogs-comp";
import SeeOurWork from "./pages/See-Our-Work-Page/see-our-work";
import DifferentiatorComp from "./pages/Differentiator-Page/differentiator-comp";

import OurPricingPage from "./pages/Our-Pricing-Page/index";
// import PhoneRotationComp from './components/Phone-Rotation-Comp/phone-rotation-comp';
// import AppSecond from './demo/AppSecond';

import HowItWorks from "./pages/How-It-Works-Page/how-it-works";
import PrivacyPolicy from "./pages/Privacy-Policy-Page/privacy-policy";
import ContentAIPage from "./pages/Content-AI-Page/content-ai-page";
import LandingPage from "./pages/Landing-Page/landing-page";

import CarrierPage from "./pages/Carrier-Page/carrier-page";
// import BuilderPage from "./pages/Builder-Page/builder-page";
import WelcomePage from "./pages/Landing-Page/Landing-Page-Duplicate/welcome-page";
import ErrorPage from "./pages/Error-Page/error-page";

//Creating Context

function App() {
  // eslint-disable-next-line
  // const [onLoading, setOnloading] = useState(true)
  const [onLoading, setOnloading] = useState(true);

  const [currentPage, setCurrentPage] = useState(false);
  const [scrollDownGif, setScrollDownGIF] = useState(true);

  //media Querys
  const mediaQuery = window.matchMedia(`(max-width: 480px)`);

  const [query, setQuery] = useState(mediaQuery.matches);

  useEffect(() => {
    window.onresize = () => {
      setQuery(mediaQuery.matches);
    };
  }, [mediaQuery, query]);

  useEffect(() => {
    setTimeout(() => {
      setOnloading(false);
    }, 9000);
  }, []);

  function handleCurrentPage() {
    setCurrentPage(true);
  }

  function onLoadFunction() {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/clint-dashboard" ||
      window.location.pathname === "/see-our-work" ||
      window.location.pathname === "/demo-pitch-deck" ||
      window.location.pathname === "/welcome"
    ) {
      setCurrentPage(true);
    } else {
      setCurrentPage(false);
    }
  }

  function handleScrollGIFVisibility() {
    if (
      window.location.pathname === "/" ||
      window.location.pathname === "/differentiator" ||
      window.location.pathname === "/our-pricing" ||
      window.location.pathname === "/about-us" ||
      window.location.pathname === "/team-up" ||
      window.location.pathname === "/careers" ||
      window.location.pathname === "/pitch-contents"
    ) {
      setScrollDownGIF(true);
    } else {
      setScrollDownGIF(false);
    }
  }

  function handlePageScrolling() {
    window.scroll(0, 0);
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [compTrigger, setCompTrigger] = useState();

  const handlePageTitle = (
    Title,
    Description,
    CanonicalLink,
    Keywords,
    PageURL
  ) => {
    document.title = Title;
    let pageDescription = document.querySelector('meta[name="description"]');
    let pageKeywords = document.querySelector('meta[name="keywords"]');
    let pageCanonicalLink = document.querySelector('link[rel="canonical"]');

    if (pageDescription) {
      pageDescription.setAttribute("content", Description);
    }
    if (pageKeywords) {
      pageKeywords.setAttribute("content", Keywords);
    }

    if (pageCanonicalLink) {
      pageCanonicalLink.setAttribute("href", CanonicalLink);
    }

    setCompTrigger(PageURL);
  };

  const FooterElementDiv = useRef(null);

  return (
    <div
      className="App-main-container"
      onLoad={() => {
        onLoadFunction();
        handleScrollGIFVisibility();
      }}
    >
      {onLoading &&
        window.location.pathname !== "/demo-pitch-deck" &&
        window.location.pathname !== "/thank-you" &&
        window.location.pathname !== "/welcome" ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "#122023",
            backgroundImage: `url(https://rentblob.blob.core.windows.net/pitch/img/Pitch-Catalyst/home-page-img/bg-vector.png)`,
            backgroundSize: "80%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "color-burn",
          }}
        >
          <MaskedComp Query={query} />
        </div>
      ) : (
        <BrowserRouter>
          {!currentPage && (
            <NavbarComp
              handleCurrentPage={handleCurrentPage}
              handlePageScrolling={handlePageScrolling}
              Query={query}
              CompTrigger={compTrigger}
            />
          )}

          {scrollDownGif && (
            <ScrollDownComp
              FooterElementDiv={FooterElementDiv}
              ScrollDownGif={scrollDownGif}
            />
          )}

          <div className={!currentPage ? "website-body" : "only-body"}>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <HomePage Query={query} HandlePageTitle={handlePageTitle} />
                }
              />
              {/* <Route path="/login" element={<LoginPage Query={query} HandlePageTitle={handlePageTitle} />} /> */}
              <Route
                path="/team-up"
                element={
                  <TeamUp Query={query} HandlePageTitle={handlePageTitle} />
                }
              />
              <Route
                path="/about-us"
                element={
                  <AboutUsPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/blog"
                element={
                  <BlogPage Query={query} HandlePageTitle={handlePageTitle} />
                }
              />

              <Route
                path="/:individual"
                element={
                  <IndividualBlogsComp
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />

              <Route
                path="/see-our-work"
                element={
                  <SeeOurWork Query={query} HandlePageTitle={handlePageTitle} />
                }
              />

              <Route
                path="/demo-pitch-deck"
                element={
                  <DemoPitchDeck
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/how-it-works"
                element={
                  <HowItWorks Query={query} HandlePageTitle={handlePageTitle} />
                }
              />
              <Route
                path="/privacy-policy"
                element={
                  <PrivacyPolicy
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/differentiator"
                element={
                  <DifferentiatorComp
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/pitch-contents"
                element={
                  <ContentAIPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/our-pricing"
                element={
                  <OurPricingPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/thank-you"
                element={
                  <ThankYouPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/welcome"
                element={
                  <LandingPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              <Route
                path="/careers"
                element={
                  <CarrierPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />
              {/* <Route
                path="/builders"
                element={
                  <BuilderPage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              /> */}

              {/* Experimental */}
              <Route
                path="/real-estate"
                element={
                  <WelcomePage
                    Query={query}
                    HandlePageTitle={handlePageTitle}
                  />
                }
              />

              <Route
                path="/404"
                element={
                  <ErrorPage Query={query} HandlePageTitle={handlePageTitle} />
                }
              />

              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </div>

          {!currentPage && (
            <div ref={FooterElementDiv}>
              <FooterComp Query={query} />
            </div>
          )}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
