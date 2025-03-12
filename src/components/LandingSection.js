import React from "react";
import { Avatar, Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FullScreenSection from "./FullScreenSection";
import bgImage from "../images/background.jpg"

const LandingSection = () => {
  const navigate = useNavigate(); 

  return (
    <Box
      justifyContent="center"
      alignContent="center"
      overflow="hidden"
      maxWidth="100%" 
      h="100vh" 
      m={0}
      padding="8% 20% 5% 20%"
      boxSizing="border-box"
      backgroundImage={`url(${bgImage})`}
      backgroundSize="cover"
    >
      <VStack spacing={16}>
        <VStack spacing={2}>
          <Heading size="2xl" as="h1" class="display-title">Little Lemon</Heading>
          <Heading class="subtitle">Chicago</Heading>
        </VStack>
        <VStack spacing={6} textAlign="center" maxW="600px">
          <Text>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, 
            who moved to the United States to pursue their shared dream of owning a restaurant.
          </Text>
          <Text>
            To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. 
            Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond 
            classic Italian to incorporate additional cuisines from the Mediterranean region.
          </Text>
          <Button onClick={() => navigate("/booking")} class="custom-button">Book a Table</Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default LandingSection;