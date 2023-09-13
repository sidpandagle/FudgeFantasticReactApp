import React, { useEffect, useState } from "react";

const Perspective = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const updateRate = 10;
  let counter = 0;
  const imageUrl = "https://picsum.photos/200/300";

  useEffect(() => {


    const container = document.getElementById("container");
    const inner = document.getElementById("inner");
    const onMouseEnterHandler = () => {
      setIsMouseInside(true);
    };

    const onMouseLeaveHandler = () => {
      setIsMouseInside(false);
    };

    const onMouseMoveHandler = (event) => {
      if (isTimeToUpdate()) {
        update(event);
      }
    };

    const update = (event) => {
      updateMousePosition(event);
      updateTransformStyle(
        (mousePosition.y / inner.offsetHeight / 2).toFixed(2),
        (mousePosition.x / inner.offsetWidth / 2).toFixed(2)
      );
    };

    const updateMousePosition = (event) => {
      const e = event || window.event;
      setMousePosition({
        x: e.clientX - container.offsetLeft - Math.floor(container.offsetWidth / 2),
        y: (e.clientY - container.offsetTop - Math.floor(container.offsetHeight / 2)) * -1,
      });
    };

    const updateTransformStyle = (x, y) => {
      const style = `rotateX(${(x * 100).toFixed(1)}deg) rotateY(${(y * 100).toFixed(1)}deg)`;
      console.log(style);
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTransform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };

    const isTimeToUpdate = () => {
      return counter++ % updateRate === 0;
    };

    container.addEventListener("mouseenter", onMouseEnterHandler);
    container.addEventListener("mouseleave", onMouseLeaveHandler);
    container.addEventListener("mousemove", onMouseMoveHandler);

    return () => {
      container.removeEventListener("mouseenter", onMouseEnterHandler);
      container.removeEventListener("mouseleave", onMouseLeaveHandler);
      container.removeEventListener("mousemove", onMouseMoveHandler);
    };
  }, [mousePosition]);



  return (
    <div className="flex justify-center items-center">
      <div id="container" className="rounded-md ">
        <img id="inner" src={imageUrl} className="border-8 rounded-md h-80 w-80" />
      </div >
    </div >
  );
};

export default Perspective;
