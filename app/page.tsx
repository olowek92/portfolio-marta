import ContactPage from "./(routes)/kontakt/page";
import AboutPage from "./(routes)/o-przystanku/page";
import ServicesPage from "./(routes)/oferta/page";
import TermsAndConditionsPage from "./(routes)/regulamin/page";
import ExpertsPage from "./(routes)/specjalisci/page";
import BookingPage from "./(routes)/zapisy/page";

export default function Home() {
  return (
    <>
      <AboutPage />
      <ExpertsPage />
      <ServicesPage />
      <BookingPage />
      <ContactPage />
      <TermsAndConditionsPage />
    </>
  );
}
