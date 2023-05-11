import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Faqs = () => {
  const accordion = [
    {
      id: 1,
      question:
        "How do I access other developers' GitHub repositories from Multroic?",
      answer:
        "To access other developers' GitHub repositories, you can simply click on the link to their repository on their project page.",
    },
    {
      id: 2,
      question: "How do I showcase my open source game on Multroic?",
      answer:
        "To showcase your open source game on Multroic, you can create a dedicated project page with detailed information, screenshots, and links to your source code.",
    },
    {
      id: 3,
      question: "Can I download games from Multroic?",
      answer:
        "Yes, you can download games from Multroic based on the requirements set by the author.",
    },
    {
      id: 4,
      question: "How do I collaborate with other game developers on Multroic?",
      answer:
        "To collaborate with other game developers on Multroic, you can explore, discover, and contribute to open source gaming projects using commenting and discussion functionalities.",
    },
    {
      id: 5,
      question: "Is Multroic a free platform?",
      answer:
        "Yes, Multroic is a free and open source platform for game developers and gamers.",
    },
  ];

  const [accNum, setAccNum] = useState(0);

  const handleFaqAccordion = (number) => {
    accNum === number ? setAccNum(0) : setAccNum(number);
  };

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <div className="px-10 space-y-5">
        {accordion.map((faq) => (
          <div key={faq.id}>
            <button
              onClick={() => handleFaqAccordion(faq.id)}
              className={`${
                accNum === faq.id ? "bg-custom-gradient p-1" : ""
              } flex font-bold items-center hover:bg-custom-gradient justify-between text-left px-3 duration-500 text-md py-3 border shadow w-full`}
            >
              {faq.question}
              {accNum === faq.id ? (
                <span>
                  <IoIosArrowUp />
                </span>
              ) : (
                <span>
                  <IoIosArrowDown />
                </span>
              )}
            </button>
            <div
              className={`${
                accNum === faq.id ? "block" : "hidden"
              } border p-5 text-justify duration-500 `}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
