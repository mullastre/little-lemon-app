import React from "react";
import { Box, Grid, GridItem, Heading, Text, VStack, Image, HStack } from "@chakra-ui/react";
import aboutImg from "../images/Mario-Adrian-A.jpg";
import lemonImg from "../images/lemon.png"

const About = () => (
  <Box
    justifyContent="center"
    h="100vh"
    maxWidth="100%"
    padding="8% 10% 8% 10%"
    boxSizing="border-box"
    id="about-section"
  >
    <Grid gridTemplateColumns="60% 40%" gap="10">

      <GridItem alignContent="center">
        <Grid gridTemplateRows="repeat(2)" gap="10">
          <VStack spacing={0} align="start">
            <HStack>
              <Image src={lemonImg} alt="Lemon Icon" h="50px"/>
              <Heading as="h2" class="secondary-title">Little Lemon</Heading>
            </HStack>
            <Heading paddingLeft="75px" as="h3" class="subtitle">Get to know us</Heading>
          </VStack>
          <VStack spacing={6}>
            <Text>Little Lemon is owned by two Italian brothers, Mario and Adrian, 
              who moved to the United States to pursue their shared dream of owning a restaurant.
            </Text>
            <Text>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. 
              Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond 
              classic Italian to incorporate additional cuisines from the Mediterranean region.
            </Text>
          </VStack>
        </Grid>
      </GridItem>

      <GridItem>
        <Image
          src={aboutImg}
          alt="Mario and Adrian"
          h="600px"
          w="100%"  // Ensures full width inside its container
          objectFit="cover"
          objectPosition="center"
          borderRadius="16px"
        />
      </GridItem>

    </Grid>
  </Box>
);

export default About;
