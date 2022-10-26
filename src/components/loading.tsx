import React from "react";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import "../styles/loading.css";

const Loading = () => {


  const imageName: any = useRef();
  const hide: any = useRef();


  useEffect(() => {

    gsap.to(imageName.current, { duration: 2, y: "0%", delay: 1.5 });
    gsap.to(hide.current, { duration: 2, y: "-109%", delay: 2.5 });
  }, []);



  return (

    <div ref={hide} className="mainL">
      <div className="hide">
        <img
          className="image"
          ref={imageName}
          src="fh3.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Loading;
