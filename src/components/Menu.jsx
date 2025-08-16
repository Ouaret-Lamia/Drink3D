"use client";

import React, { useRef } from "react";
import { allCoffees } from "../../constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCoffees = allCoffees.length;
  const contentRef = useRef();

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.fromTo(
      ".coffee img",
      {
        opacity: 0,
        xPercent: -100,
      },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details h2",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const goToSlide = (index) => {
    const newIndex = (index + totalCoffees) % totalCoffees;

    setCurrentIndex(newIndex);
  };

  const getCoffeeAt = (indexOffset) => {
    return allCoffees[
      (currentIndex + indexOffset + totalCoffees) % totalCoffees
    ];
  };

  const currentCoffee = getCoffeeAt(0);
  const prevCoffee = getCoffeeAt(-1);
  const nextCoffee = getCoffeeAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* <img src="/images/bean.png" alt="left-bean" id="m-left-bean" /> */}
      <img src="/images/bean.png" alt="right-bean" id="m-right-bean" />

      <h2 id="menu-heading" className="sr-only">
        Coffee Menu
      </h2>

      <nav className="coffee-tabs" aria-label="Coffee Navigation">
        {allCoffees.map((coffee, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={coffee.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => goToSlide(index)}
            >
              {coffee.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCoffee.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            className="text-left flex flex-col items-end"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCoffee.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="coffee">
          <img
            src={currentCoffee.image}
            alt="Coffee"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCoffee.name} </p>
          </div>

          <div className="details">
            <h2>{currentCoffee.title}</h2>
            <p>{currentCoffee.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
