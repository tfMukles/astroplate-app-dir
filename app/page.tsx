import Banner from "@/components/banner";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import { getPageData } from "../lib/contentParser";

export default async function () {
  const { data } = getPageData("content/index.md");
  const { banner, cta, testimonial, services } = data;

  return (
    <>
      <Header />
      <Banner banner={banner} />
      <Services services={services} />
      <Testimonial testimonial={testimonial} />
      <CTA cta={cta} />
      <Footer />
    </>
  );
}
