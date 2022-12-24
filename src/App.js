import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/navigation.component";
import DirectoryLand from "./components/landing-page/directory/directorylanding.component";
import Footer from "./components/footer/footer.component";
import Wallet from "./components/pages/Wallet";
import Details from "./components/pages/Details";
import AboutUs from "./components/pages/AboutUs";
import Download from "./components/pages/Download";
import LegalPolicy from "./components/footer/footer pages/legalPolicy.footer";
import Faq from "./components/pages/faq";
import TermsConditions from "./components/footer/footer pages/termsCondition";
import Support from "./components/footer/footer pages/support.footer";

import ScrollToTop from "./scroll";

import { QueryClientProvider, QueryClient } from "react-query";

import Explore from "./components/pages/Explore";
//import TermsConditions from "./components/footer/footer pages/termsCondition";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="overflow-hidden">
        <ScrollToTop>
          <Routes>
            {/* <Route path='/' element={<Navigation />}> */}
            <Route path="/" element={<Navigation />}></Route>
            <Route index element={<DirectoryLand />}></Route>
            <Route path="wallet" element={<Wallet />}></Route>
            <Route path="about" element={<AboutUs />}></Route>
            <Route path="details/:id" element={<Details />}></Route>
            <Route path="faq" element={<Faq />}></Route>
            <Route path="download" element={<Download />}></Route>
            <Route path="explore" element={<Explore />}></Route>

            {/* <Route path='legalPolicy' element={<LegalPolicy />}></Route> */}
            <Route path="terms" element={<TermsConditions />}></Route>
            <Route path="support" element={<Support />}></Route>
            <Route path="policies" element={<LegalPolicy />}></Route>
            {/* //<Route path='terms' element={<TermsConditions />}></Route> */}
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
