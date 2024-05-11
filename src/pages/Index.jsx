import { Box, Button, Container, Image, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const isPlaying = false; // This should be managed with state in a real application

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTcxNTM4ODg5OHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="300px" borderRadius="full" />
        <Text fontSize="2xl" fontWeight="bold">
          Song Title
        </Text>
        <Text fontSize="md">Artist Name</Text>
        <Box pt={4} width="80%">
          <Slider aria-label="music-slider" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="40%" pt={4}>
          <Button leftIcon={<FaBackward />} variant="ghost" />
          <Button leftIcon={isPlaying ? <FaPause /> : <FaPlay />} variant="solid" colorScheme="purple" size="lg" />
          <Button leftIcon={<FaForward />} variant="ghost" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
