import Layout from "../components/Layout";
import { Flex, Box, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";
// import { useState } from "react";
import { BsMusicNote } from "react-icons/bs";
import * as Tone from "tone";
// const MotionBox = motion.custom(Box);
const MotionFlex = motion.custom(Flex);

const IndexPage = () => {
  const playNote = () => {
    const notes = ["A4", "B4", "C4", "D4", "E4", "F4", "G4", "A4"];
    const note = notes[Math.round(Math.random() * notes.length)];
    console.log(note);
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    // trigger the attack immediately
    synth.triggerAttack(note, now);
    // wait one second before triggering the release
    synth.triggerRelease(now + 1);
  };
  return (
    <Layout>
      <Flex
        bg="#8EC5FC"
        bgImage="linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"
        h="100vh"
        w="100vw"
        flexDir="column"
      >
        <Text ml="auto" mr="auto" mt="30vh" fontSize="5xl" fontFamily="music">
          Perfect Pitch
        </Text>
        <MotionFlex
          ml="auto"
          mr="auto"
          mt="20px"
          bg="white"
          borderRadius="50%"
          p="15px"
          whileHover={{ scale: 1.2 }}
          onClick={playNote}
        >
          <Box ml="auto" mr="auto" size="120px" as={BsMusicNote}></Box>
        </MotionFlex>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
