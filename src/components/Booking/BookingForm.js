import React, { useState } from "react";
import {
  Box, Button, FormControl, FormLabel, Input, Select, Textarea, VStack, Heading, Text, InputGroup, InputLeftAddon, InputRightAddon, FormErrorMessage, HStack
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const today = new Date();
  while (![4, 5, 6, 0].includes(today.getDay())) {
    today.setDate(today.getDate() + 1);
  }

  const occasions = ["Birthday", "Anniversary", "Engagement"];

  // Dynamically create validation schema based on the step
  const validationSchema = Yup.object({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number()
      .min(1, "Minimum of 1 guest")
      .max(15, "Maximum of 15 guests")
      .required("Required"),
    occasion: Yup.string().required("Required"),
    name: step === 2 ? Yup.string().required("Required") : Yup.string(),
    email: step === 2 ? Yup.string().email("Invalid email format").required("Required") : Yup.string(),
  });

  return (
    <Formik
      initialValues={{
        date: today,
        time: "20:00",
        guests: 1,
        occasion: "",
        name: "",
        email: "",
        notes: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
      }}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <Form>
          <VStack spacing={4} align="stretch">
            {step === 1 && (
              <>
                <FormControl>
                  <FormLabel>Select a Date</FormLabel>
                  <Field name="date">
                    {({ field }) => (
                      <ReactDatePicker
                        {...field}
                        selected={selectedDate}
                        onChange={(date) => {
                          setSelectedDate(date);
                          // If necessary, update available times here based on the selected date
                        }}
                        filterDate={(date) => [4, 5, 6, 0].includes(date.getDay())}
                        dateFormat="dd-MM-yyyy"
                        className="custom-datepicker"
                        popperPlacement="bottom-start"
                        showPopperArrow={true}
                      />
                    )}
                  </Field>
                </FormControl>
                <FormControl>
                  <FormLabel>Time</FormLabel>
                  <Field as={Select} name="time">
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </Field>
                </FormControl>
                <FormControl isInvalid={touched.guests && errors.guests}>
                  <FormLabel>Number of Guests</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>
                      <Button
                        onClick={() => {
                          if (values.guests > 1) {
                            setFieldValue("guests", values.guests - 1);
                          }
                        }}
                        size="md" className="custom-button"
                      >
                        -
                      </Button>
                    </InputLeftAddon>
                    <Field name="guests">
                      {({ field }) => (
                        <Input
                          {...field}
                          type="number"
                          min={1}
                          max={15}
                          value={values.guests}
                          onChange={(e) => {
                            const newGuests = Math.min(15, Math.max(1, parseInt(e.target.value)));
                            setFieldValue("guests", newGuests);
                          }}
                          size="md" className="custom-button"
                        />
                      )}
                    </Field>
                    <InputRightAddon>
                      <Button
                        onClick={() => {
                          if (values.guests < 15) {
                            setFieldValue("guests", values.guests + 1);
                          } else {
                            alert("Sorry, the maximum number of guests is 15.");
                          }
                        }}
                        size="sm"
                      >
                        +
                      </Button>
                    </InputRightAddon>
                  </InputGroup>
                  <FormErrorMessage>{errors.guests}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Occasion</FormLabel>
                  <Field as={Select} name="occasion">
                    {occasions.map((occasion) => (
                      <option key={occasion} value={occasion}>{occasion}</option>
                    ))}
                  </Field>
                </FormControl>
                <Button type="submit" class="custom-button">Next</Button>
              </>
            )}
            {step === 2 && (
              <>
                <HStack>
                  <FontAwesomeIcon
                    color="black"
                    icon={faChevronLeft}
                    size="sm" />
                  <Link onClick={() => setStep(1)}>Back</Link>
                </HStack>
                <FormControl isInvalid={touched.name && errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Field as={Input} name="name" />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={touched.email && errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Field as={Input} name="email" type="email" />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel>Other Specifications</FormLabel>
                  <Field as={Textarea} name="notes" />
                </FormControl>
                <Button type="submit" class="custom-button">Confirm Booking</Button>

              </>
            )}
            {step === 3 && (
              <>
                <Heading as="h4" class="subtitle">Booking Confirmed!</Heading>
                <Text><strong>Date:</strong> {values.date.toDateString()}</Text>
                <Text><strong>Time:</strong> {values.time}</Text>
                <Text><strong>Guests:</strong> {values.guests}</Text>
                <Text><strong>Occasion:</strong> {values.occasion}</Text>
                <Text><strong>Name:</strong> {values.name}</Text>
                <Text><strong>Email:</strong> {values.email}</Text>
                <Text><strong>Other Specifications:</strong> {values.notes}</Text>
                <Button class="custom-button" onClick={() => navigate("/")}>Back to Home</Button>
              </>
            )}
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
