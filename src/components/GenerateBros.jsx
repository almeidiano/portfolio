import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function GenerateBros() {
  const broRef = useRef();

  function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  let allBros = [
    '/bro-pic/app-installation-bro.svg',
    '/bro-pic/designer-girl-bro.svg',
    '/bro-pic/dev-activity-bro.svg',
    '/bro-pic/law-firm-bro.svg',
    '/bro-pic/website-creator-bro.svg'
  ];

  shuffle(allBros); 

  useLayoutEffect(() => {
    if (broRef.current) {
      gsap.fromTo(broRef.current, 
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          duration: 1.5,
          x: 0,
          ease: "power3.out",
        }
      );
    }
  }, []); 

  return (
    <>
      <img className="h-[400px] w-[400px]" ref={broRef} src={allBros[0]} />
    </>
  )
}