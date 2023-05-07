import React, { useState } from "react";

const Faqs = () => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "How do I access other developers' GitHub repositories from Multroic?",
      answer:
        "To access other developers' GitHub repositories, you can simply click on the link to their repository on their project page.",
    },
    {
      question: "How do I showcase my open source game on Multroic?",
      answer:
        "To showcase your open source game on Multroic, you can create a dedicated project page with detailed information, screenshots, and links to your source code.",
    },
    {
      question: "Can I download games from Multroic?",
      answer:
        "Yes, you can download games from Multroic based on the requirements set by the author.",
    },
    {
      question: "How do I collaborate with other game developers on Multroic?",
      answer:
        "To collaborate with other game developers on Multroic, you can explore, discover, and contribute to open source gaming projects using commenting and discussion functionalities.",
    },
    {
      question: "Is Multroic a free platform?",
      answer:
        "Yes, Multroic is a free and open source platform for game developers and gamers.",
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
      <ul className="space-y-6">
        {faqs.map((faq, index) => (
          <li key={index}>
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out focus:outline-none focus:shadow-outline"
              onClick={() => handleClick(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`h-5 w-5 transition-transform transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 6.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="mt-4 bg-gray-100 p-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faqs;
