import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";

const Experience = () => {
  const [workAmazon, setWorkAmazon] = useState(false);

  
  const handleAmazon = () => {
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
