import { Box, Heading, HStack, Image, Text, VStack, Flex, Spacer , Link} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, price, description, imageSrc }) => {

  return(
    <VStack
      bg="#EDEFEE"
      borderRadius="20px"
      overflow="hidden"
      align="start"
      w="100%"
      h="full"
      >
      <Image src={imageSrc}  h="150px" w="100%" objectFit="cover"/>

      <Flex direction="column" h="full" padding="5%" w="100%">
        <HStack justifyContent="space-between">
          <Heading as="h3" color="black" align="left" size="md">{title}</Heading>
          <Heading color="#EE9972" size="s">{price}</Heading>
        </HStack>

        <Text color="grey" paddingTop="5%" paddingBottom="3%">{description}</Text>

        <Spacer />

        <HStack w="100%" paddingBottom="3%">
            <Link color="black">Add for delivery</Link>
          <FontAwesomeIcon
            color="black"
            icon={faBicycle}
            size="1x" />
        </HStack>
      </Flex>
    </VStack>
  );
};

export default Card;
