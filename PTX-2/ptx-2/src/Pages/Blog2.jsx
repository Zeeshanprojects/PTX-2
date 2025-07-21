import React from 'react';
import './Blog.style.css';
import Image from '../Images/Image';
import Footer from "../Components/Footer";

export default function Blog2() {
  return (
    <>

    <div className="container-fluid p-0">
      <div className="blog-header">
        <img src={Image.Blog2} alt="Blog Banner" className="blogs-img" />
       
      </div>

      <div className="container blog-content">
  <h4>1.The Art of Craftsmanship</h4>
  <p>
    Before a garment hits the runway or shelf, there’s a story woven into every stitch. From hand-sewn details to carefully chosen textures, the fashion world thrives on the unseen labor of passionate artisans and skilled technicians. 
  </p>

  <h4>2.From Sketch to Sewn</h4>
  <p>
    The journey of a garment begins with a pencil stroke. Designers start with mood boards and rough sketches, often inspired by culture, emotion, or nature. These ideas are then translated into patterns and prototypes — tested, refined, and perfected.
  </p>

  <h4>3.Fabric Selection: The Silent Hero</h4>
  <p>
    Fabric isn’t just a material — it’s the soul of the design. Whether it’s breathable linen for summer collections or rich velvet for winter elegance, the choice of fabric defines not just look, but feel and function.
  </p>

  <h4>4.Hands Behind the Work</h4>
  <p>
    Every seamstress, tailor, and pattern master plays a vital role in bringing a design to life. “Behind the Stitch” celebrates these unsung heroes who transform imagination into reality — one needle, one thread, one cut at a time.
  </p>

  <h4>5.Why It Matters</h4>
  <p>
    In a fast-fashion era, taking a moment to appreciate the craftsmanship reminds us of the value of slow, ethical, and meaningful fashion. It’s not just about the final look — it’s about the process, the patience, and the people.
  </p>

  <p>
    Be  hind every great design lies a thousand micro-decisions. At its core, fashion is a collaboration — between vision and hand, concept and cloth. This is what makes it art.
  </p>
</div>
    </div>
    <Footer/>
    </>

  );
}
