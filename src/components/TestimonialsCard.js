import { Box, Heading, HStack, Image, Text, VStack, Spacer } from "@chakra-ui/react";
import React from "react";
import StarRating from "./StarRating";

const TestimonialsCard = ({ rating, name, description, imageSrc }) => {
  return(
    <VStack
      bg="white"
      overflow="hidden"
      align="start"
      w="100%"
      h="full"
      padding="10%"
      border="solid #495E57 3px"
      borderRadius="8px"
      >
      <StarRating
        rating={rating}
      />
      <Spacer />
      <HStack
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={4}
      >
        <Image
          src={imageSrc}
          boxSize="80px"
          borderRadius="full"
          fit="cover"
          alt={name}
        />
        <Heading color="black" align="left" size="s">{name}</Heading>
      </HStack>
      <Text color="grey">{description}</Text>
    </VStack>
  );
};

export default TestimonialsCard;
