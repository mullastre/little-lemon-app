import React from "react";
import { Box, Grid, GridItem, Heading, Text, Link, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#495E57" color="white" p={10}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        
        <GridItem>
          <VStack align="start">
            <Heading size="md">Contact</Heading>
            <Text>1234 Restaurant St.</Text>
            <Text>Chicago, IL</Text>
            <Text>+1 234 567 890</Text>
            <Text>info@littlelemon.com</Text>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start">
            <Heading size="md">Quick Links</Heading>
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/booking">Reservations</Link>
            <Link href="#">Order Online</Link>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start">
            <Heading size="md">Follow Us</Heading>
            <Link href="#">Facebook</Link>
            <Link href="#">Twitter</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">LinkedIn</Link>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start">
            <Heading size="md">Newsletter</Heading>
            <Text>Subscribe to our newsletter to receive updates and special offers.</Text>
            <Link href="#">Subscribe</Link>
          </VStack>
        </GridItem>

      </Grid>
      <Box textAlign="center" mt={8}>
        <Text>&copy; 2025 Little Lemon. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;