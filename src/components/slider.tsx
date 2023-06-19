import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';

const colors = ['/image.png', '/image.png', '/image.png'];
const delay = 3000;

export const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <SliderContainer>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {colors.map((el, index) => (
            <div className="slide" key={index}>
              <Image
                width={0}
                height={0}
                sizes="100%"
                src={el}
                alt={`${index}-${el}`}
              />
            </div>
          ))}
        </div>

        <Capa>
          <ContainerCapa>Aurora</ContainerCapa>
        </Capa>

        {/* <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div> */}
      </div>
    </SliderContainer>
  );
};

const CapaBack = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  height: 100%;
  bottom: 10px;
  left: 50px;
  /* filter: blur(2px); */
  /* border-radius: 40px; */
  /* border-top-right-radius: 50px;
  border-bottom-left-radius: 50px; */
  z-index: 9;
  /* opacity: 0.2; */
  padding: 2rem;
`;

const ContainerCapa = styled.div`
  background-color: transparent;
  height: 400px;
  width: 100%;
  /* z-index: 999; */
  color: #000;
  /* opacity: 1; */
  font-size: 1.4rem;
  h4 {
  }
`;

const Capa = styled.div`
  position: absolute;
  background-color: #00000062;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* filter: blur(2px); */
  /* border-radius: 40px; */
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  z-index: 999;
  /* opacity: 0.2; */
  padding: 2rem;
`;

const SliderContainer = styled.div`
  /* Slideshow */

  width: 50%;
  outline: 1px solid red;
  display: flex;
  align-items: center;
  padding: 2rem;

  .slideshow {
    /* margin: 0 auto; */
    overflow: hidden;
    position: relative;
    z-index: 10;
    /* max-width: 500px; */
    /* height: 600px; */
    /* border-radius: 40px; */
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;

    width: 100%;
  }

  .slideshowSlider {
    white-space: nowrap;
    transition: ease 1000ms;
  }

  .slide {
    display: inline-block;

    height: 400px;
    width: 100%;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  /* Buttons */

  .slideshowDots {
    text-align: center;
  }

  .slideshowDot {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    cursor: pointer;
    margin: 15px 7px 0px;

    background-color: #000;
  }

  .slideshowDot.active {
    background-color: #6a0dad;
  }
`;
