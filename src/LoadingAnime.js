import React from "react";
import Lottie from "react-lottie";
import * as loading from "./Lottie/loading_lottie.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoadingAnime = (props) => {
  return (
    <>
      {props.loading ? (
        <Lottie options={defaultOptions} height={350} width={350} />
      ) : null}
    </>
  );
};

export default LoadingAnime;
