import React, { useReducer, useEffect } from "react";
import {Box, Button, GridItem, Heading, HStack, Text, VStack, Grid } from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import bgImage from "../../images/restaurant2.jpg";

const fetchData = async (date) => {
  return ["20:00", "20:30", "21:00", "21:30", "22:00", "22:30"];
};

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload; 
    default:
      return state;
  }
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    const loadInitialTimes = async () => {
      const times = await fetchData(new Date());
      dispatch({ type: "SET_TIMES", payload: times });
    };
    loadInitialTimes();
  }, []);

  const updateTimes = async (date) => {
    const times = await fetchData(date);
    dispatch({ type: "SET_TIMES", payload: times });
  };

  return(
    <Box
      justifyContent="center"
      maxWidth="100vw"
      boxSizing="border-box"
      overflow="hidden"
    >
    <Grid gridTemplateColumns="60% 40%" gap="10">
      <GridItem
        alignContent="center"
        backgroundImage={`url(${bgImage})`}
        backgroundSize="cover"
        padding="10% 10% 8% 10%"
        boxSizing="border-box">

        <VStack
          align="start"
          spacing={6}
          paddingRight="20%"
          paddingLeft="10%">
          <Heading class="display-title">Book a table</Heading>
          <Text fontSize="lg">
            To ensure the best of experiences, book your table before visiting us and secure your spot.
          </Text>
        </VStack>
      </GridItem>

      <GridItem
        alignContent="center"
        padding="8% 20% 8% 10%"
        boxSizing="border-box"
        minHeight="100vh">
          <BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>
      </GridItem>
    </Grid>
  </Box>
  );
};

export default Booking;
