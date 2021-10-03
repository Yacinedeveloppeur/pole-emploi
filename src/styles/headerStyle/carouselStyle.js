import styled from "styled-components";

export const CarouselContainer = styled.div`
  @media screen and (max-width: 1200px) {
    /* min-width: 0px;   */
  }

  min-width: 500px;
  height: 100%;
  padding: auto;
  flex-wrap: wrap;
  margin: auto;

  p {
    margin: 5px;
  }
  * .carousel {
    width: 100%;
  }
  @keyframes tonext {
    75% {
      left: 0;
    }
    95% {
      left: 100%;
    }
    98% {
      left: 100%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes tostart {
    75% {
      left: 0;
    }
    95% {
      left: -300%;
    }
    98% {
      left: -300%;
    }
    99% {
      left: 0;
    }
  }

  @keyframes snap {
    96% {
      scroll-snap-align: center;
    }
    97% {
      scroll-snap-align: none;
    }
    99% {
      scroll-snap-align: none;
    }
    100% {
      scroll-snap-align: center;
    }
  }

  * {
    box-sizing: border-box;
    scrollbar-color: transparent transparent; /* thumb and track color */
    scrollbar-width: 0px;
  }

  *::-webkit-scrollbar {
    width: 0;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
  }

  * {
    -ms-overflow-style: none;
  }

  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .carousel {
    position: relative;
    padding-top: 15%;
    filter: drop-shadow(0 0 10px #0003);
    perspective: 100px;
    color: white;
    font-size: 2em;
    text-align: center;
  }

  .carousel__viewport {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    align-items: center;
  }

  .carousel__slide {
    height: 80%;
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    background-color: #f99;
  }

  .carousel__slide:nth-child(even) {
    background-color: #99f;
  }

  .carousel__slide:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 70px);
    color: #fff;
    font-size: 1em;
  }

  .carousel__snapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    scroll-snap-align: center;
  }

  @media (hover: hover) {
    .carousel__snapper {
      animation-name: tonext, snap;
      animation-timing-function: ease;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    .carousel__slide:last-child .carousel__snapper {
      animation-name: tostart, snap;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel__snapper {
      animation-name: none;
    }
  }

  .carousel:hover .carousel__snapper,
  .carousel:focus-within .carousel__snapper {
    animation-name: none;
  }

  .carousel::before,
  .carousel::after,
  .carousel::before,
  .carousel::after {
    content: "";
    z-index: 1;
    pointer-events: none;
  }
`;
