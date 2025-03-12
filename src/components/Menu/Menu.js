import React from "react";
import { Box, Button, Heading, HStack, VStack } from "@chakra-ui/react";
import ItemCard from "./MenuItemCard"

const specials = [
  {
    title: "Greek Salad",
    price: "12.99€",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../../images/salad.png"),
  },
  {
    title: "Bruchetta",
    price: "5.99€",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("../../images/bruschetta.png"),
  },
  {
    title: "Lemon Dessert",
    price: "5.00€",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../../images/lemon dessert.jpg"),
  },
  {
    title: "Grilled Fish",
    price: "20.00€",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../../images/grilled fish.jpg"),
  },
  {
    title: "Spagheti",
    price: "15.00€",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../../images/background.jpg"),
  },
];

const Menu = () => {
  return (
    <VStack
      padding="10% 10% 5% 10%"
      alignItems="center"
      spacing={9}
    >
        <Heading as="h1" class="display-title">
            Our Menu
        </Heading>

      <Box
        display="grid"
        gridTemplateColumns="repeat(5,minmax(0,1fr))"
        gridGap={8}
      >
        {specials.map((specials) => (
          <ItemCard
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

export default Menu;
