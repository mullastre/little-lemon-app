import React from "react";
import FullScreenSection from "./FullScreenSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Heading, Spacer, VStack } from "@chakra-ui/react";
import TestimonialsCard from "./TestimonialsCard";

const testimonials = [
  {
    rating: "5",
    name: "Sophia R.",
    description:
      "Little Lemon is a hidden gem! The flavors transport you straight to the Mediterranean coast—fresh ingredients, aromatic herbs, and perfectly cooked seafood. Can’t wait to come back!",
    getImageSrc: () => require("../images/ava-2.jpg"),
  },
  {
    rating: "4",
    name: "Mark D.",
    description:
      "Incredible food and a warm, inviting atmosphere. The homemade hummus and grilled halloumi were absolute standouts. Little Lemon truly captures the essence of Mediterranean cuisine!",
    getImageSrc: () => require("../images/ava-1.jpg"),
  },
  {
    rating: "4",
    name: "James P.",
    description:
      "Every dish is bursting with flavor! The moussaka was rich and comforting, and the baklava was the perfect sweet finish. Highly recommend for an authentic Mediterranean experience!",
    getImageSrc: () => require("../images/ava-3.jpg"),
  },
  {
    rating: "4",
    name: "Laura M.",
    description:
      "From the first bite to the last, everything was perfection! The lamb souvlaki was tender and juicy, and the service was top-notch. Little Lemon is my new favorite spot",
    getImageSrc: () => require("../images/ava-4.jpg"),
  },
];

const Testimonials = () => {
  return (
    <VStack
      background="rgba(244, 207, 21, 0.15)"
      padding="5% 10%"
      alignItems="center"
      spacing={8}
    >
      <Heading as="h2" class="secondary-title" paddingBottom="1%">
        Testimonials
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={8}
      >
        {testimonials.map((testimonial) => (
          <TestimonialsCard
            key={testimonial.name}
            rating={testimonial.rating}
            name={testimonial.name}
            description={testimonial.description}
            imageSrc={testimonial.getImageSrc()}
          />
        ))}
      </Box>
    </VStack>
  );
};

export default Testimonials;
