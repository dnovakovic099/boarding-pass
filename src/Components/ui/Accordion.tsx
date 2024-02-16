import { useState } from "react";
import PlusIcon from "../../icons/PlusIcon";

const Accordion = (props: any) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between p-4">
        <span
          className="text-base sm:text-xl text-start"
          style={{ flexBasis: "fit-content" }}
        >
          {props.question}
        </span>
        <PlusIcon
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm sm:text-base px-4 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pb-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{props.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
