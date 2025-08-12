import React from "react";
import { coffeeLists, refreshingLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Coffees = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#coffees",
        start: "top 10%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-bean", {
        x: -100,
        y: 100,
        duration: 1
      })
      .from("#c-right-bean", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id="coffees" className="noisy">
      <img src="/images/bean.png" alt="l-bean" id="c-left-bean" />
      <img src="/images/bean.png" alt="r-bean" id="c-right-bean" />

      <div className="list">
        <div className="popular">
          <h2>Most Popular Coffees:</h2>
          <ul>
            {coffeeLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>{drink.price} </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Iced & Refreshing Coffees:</h2>
          <ul>
            {refreshingLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>{drink.price} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Coffees;
