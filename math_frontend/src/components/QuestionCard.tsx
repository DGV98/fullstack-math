import QuestionCardContainer from "./QuestionCardContainer";
import { Card, CardBody } from "@chakra-ui/react";
import { MathJax } from "better-react-mathjax/MathJax";

interface Props {
  question: string;
}

const QuestionCard = ({ question }: Props) => {
  return (
    <QuestionCardContainer>
      <Card>
        <CardBody fontSize="2xl">
          <MathJax inline dynamic>
            {question}
          </MathJax>
        </CardBody>
      </Card>
    </QuestionCardContainer>
  );
};

export default QuestionCard;
