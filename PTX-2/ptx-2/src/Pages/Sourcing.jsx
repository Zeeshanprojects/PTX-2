import { useEffect } from "react";
import React from "react";
import Images from "../Images/Image";
import Footer from "../Components/Footer";
import ScrollReveal from "../Components/ScrollReveal";
export default function Sourcing() {
  useEffect(() => {
    document.title = "Sourcing | Pakistan Textile Exchange ";
  });
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Images.pdf;
    link.download = "Zeeshan-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
<div className="background-color">
<h1 className="mt-5 text-center">SERVICES / SOURCING</h1>
</div>
      
      <div className="space"> </div>
 <ScrollReveal>
 <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card-body bg-transparent">
              `
              
              <h2 className="card-title service ">
                Sourcing Manufactured Goods
              </h2>
              <p className="card-text service mt-2">
                Pakistan is the third largest grower of cotton and producer of
                cotton yarn. We have some of the largest vertical textile mills
                in the world let along the region, Pakistan is strong in cotton
                rich production of knits, woven and denim apparel and now a
                burgeoning synthetic industry for active and outerwear competing
                head to head with China and Vietnam for this sector. Our
                sourcing team are some of the best in the industry and our
                vendors are as well.
              </p>
            </div>
            <div className="card-body bg-transparent serviceparagraph">
              <h2 className="card-title service mt-4">Your Sourcing Partner</h2>

              <p className="card-text  service mt-2">
                Our roots started in the Surf and Skate industry back in the
                90s, focusing on the classic hoodie and t shirts for all the
                iconic surf brands, We were then asked to help in other
                categories like Woven cargo shorts, denim pants and accessories.
                Pakistan textile exchange is now sourcing and producing knits,
                woven, denim and non denim apparel along with accessories in
                home fashion . We provide a one stop location for quality
                sourcing services in Pakistan for your needs.
              </p>
            </div>

            <div className="card-body bg-transparent ">
              <h2 className="card-title service mt-4">Why Choose PTX</h2>

              <p className="card-text service mt-2">
                We never compromise with the quality as we consider it as our
                success pillar. We believe that compromising on quality leads to
                losing market share or clients. We believe that if we have
                customers, we have everything. That is why, we have appointed a
                separate team to answer the queries of customers and satisfy
                them on their needs. For us customer satisfaction is above all.
              </p>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-dark"
              onClick={handleDownload}
            >
              Download LookBook
            </button>
          </div>
        </div>
      </div>

      <div className="space"></div>
 </ScrollReveal>
     
      <Footer/>
    </>
  );
}
