import { parseCookies } from "nookies";

import originalImage from "../../../public/original.svg";
import variationImage from "../../../public/variation.svg";

const ExamplePage = () => {
  const cookies = parseCookies();

  const imageSrc =
    cookies["show-test-image"] === "true"
      ? variationImage.src
      : originalImage.src;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Welcome to BOXT!</h1>
      <img alt="A/B image" src={imageSrc} className="w-[150px] h-[150px]" />
    </div>
  );
};

export default ExamplePage;
