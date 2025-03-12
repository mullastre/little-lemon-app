import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const StarRating = ({ rating, maxStars = 5 }) => {
  return (
    <HStack spacing={1}>
      {[...Array(maxStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={index < rating ? solidStar : regularStar}
          color={index < rating ? "#FACC15" : "#D1D5DB"}
          size="md"
        />
      ))}
    </HStack>
  );
};

export default StarRating;
