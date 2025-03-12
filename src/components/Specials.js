import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import SpecialsCard from "./SpecialsCard";

const specials = [
  {
    title: "Greek Salad",
    price: "12.99€",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../images/salad.png"),
  },
  {
    title: "Bruchetta",
    price: "5.99€",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../images/bruschetta.png"),
  },
  {
    title: "Lemon Dessert",
    price: "5.00€",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
];

const Specials = () => {
  const navigate = useNavigate();

  return (
    <VStack
      padding="5% 10% 5% 10%"
      alignItems="flex-start"
      spacing={9}
    >
      <HStack w="100%" justifyContent="space-between" alignItems="center">
          <Heading as="h2" class="secondary-title">
              This Week's Specials
          </Heading>
          <Button class="custom-button" onClick={() => navigate("/menu")}>Check our menu</Button>
      </HStack>

      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((specials) => (
          <SpecialsCard
            key={specials.title}
            title={specials.title}
            price={specials.price}
            description={specials.description}
            imageSrc={specials.getImageSrc()}
          />
        ))}
      </Box>
    </VStack>
  );
};

export default Specials;
