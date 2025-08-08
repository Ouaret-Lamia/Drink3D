import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-bean-up", { y: 200 }, 0)
      .to(".left-bean-up", { y: -200 }, 0);
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">ESPRESSO</h1>
        <img src="/images/bean.png" alt="bean" className="left-bean-up" />
        <img src="/images/bean.png" alt="bean" className="right-bean-up" />

        <div className="body">
          <div className="content">
            <div className="space-y-3 hidden md:block">
              <p>Cool. Soft. Sublime.</p>
              <p className="subtitle">
                Awaken the Art <br />
                of Coffee
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Our coffee is crafted with care to awaken your senses and turn
                every sip into a moment of quiet luxury.
              </p>
              <a href="#coffees">View Coffees</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
