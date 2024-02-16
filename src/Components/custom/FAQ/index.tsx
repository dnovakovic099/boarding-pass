import Accordion from "../../ui/Accordion";
import { TFAQ } from "../../../@types/FAQ.ts";

const FAQ = ({ faq }: { faq: TFAQ }) => {
  return (
    <div className="flex flex-col">
      <hr className="h-px sm:h-1 border-t-0 bg-white" />
      <Accordion
        key={faq.faq_id}
        question={faq.faq_question}
        answer={faq.faq_answer}
      />
    </div>
  );
};

export default FAQ;
