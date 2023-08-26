import NewsPage from "./(routes)/aktualnosci/page";
import PricingPage from "./(routes)/cennik/page";
import ContactPage from "./(routes)/kontakt/page";
import AboutPage from "./(routes)/o-mnie/page";
import ServicesPage from "./(routes)/oferta/page";
import Posts from "./(routes)/posts/page";
import TermsAndConditionsPage from "./(routes)/regulamin/page";
import CooperationPage from "./(routes)/wspolpraca/page";

export default function Home() {
  return (
    <>
      {" "}
      <Posts />
      <NewsPage />
      <AboutPage />
      <ServicesPage />
      <PricingPage />
      <CooperationPage />
      <TermsAndConditionsPage />
      <ContactPage />
    </>
  );
}
