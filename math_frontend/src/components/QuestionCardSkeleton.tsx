import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const QuestionCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <SkeletonText fontSize="2xl" />
      </CardBody>
    </Card>
  );
};

export default QuestionCardSkeleton;
