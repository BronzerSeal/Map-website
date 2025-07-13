import { Text } from "@radix-ui/themes";
import "./priceQuestion.css";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useState, useRef, useEffect } from "react";

const PriceQuestion = ({ data, padding = "20px" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="custom-accordion" style={{ padding: padding }}>
      <div
        className="summary-container"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="summary-text">{data.title}</span>
        {isOpen ? (
          <ChevronUpIcon className="icon" />
        ) : (
          <ChevronDownIcon className="icon" />
        )}
      </div>
      <div
        className="content"
        style={{
          height: height,
          transition: "height 0.3s ease",
          overflow: "hidden",
        }}
        ref={contentRef}
      >
        <Text as="p" color="gray" mt={"2"}>
          {data.subTitle}
        </Text>
      </div>
    </div>
  );
};

export default PriceQuestion;
