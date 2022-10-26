import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "../styles/faq.css";

const Faq = () => {
  const [open, setOpen] = useState(null);

  const handle = (i: any) => {
    if (open === i) {
      return setOpen(null);
    }

    setOpen(i);
  };

  return (
    <div className="faqqq">
      <h2> <span>Frequently </span>asked questions?</h2>

      {data.map((user, i) => (
        <div className={open === i ? "show" : "question"} key={user.id}>
          <div className="quesionTitle" onClick={() => handle(i)}>
            <p>{user.title}</p>
            <span>
              {open === i ? (
                <AiOutlineMinusCircle className="faqIcon" />
              ) : (
                <AiFillPlusCircle className="faqIcon" />
              )}
            </span>
          </div>
          <span className={open === i ? "showText" : "quesionDesc"}>
            {user.desc}
          </span>
        </div>
      ))}



    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Who is FloodHelp?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,iLorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectet",
  },
  {
    id: 2,
    title: "Who is the public donating to?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,iLorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectet",
  },
  {
    id: 3,
    title: "How can I volunteer to help NGOs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,iLorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectet",
  },
  {
    id: 4,
    title: "Can I donate physical items?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,iLorem ipsum dolor sit amet, consectetur adipiscing elit. Rutrum viverra tellus, amet proin in semper arcu. Leo quis vitae scelerisque erat urna,i Lorem ipsum dolor sit amet, consectet",
  },
];

export default Faq;


