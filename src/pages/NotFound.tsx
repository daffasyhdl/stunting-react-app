import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Image
        width={{ base: '50vw', md: '30vw', lg:'20vw' }}
        src="https://drive.google.com/uc?export=view&id=1kVPzAOr8zJPeuV277GFursOVHNX6s2K6"
        alt="Not Found Page"
      />
      <Box textAlign="center" py={2} px={6}>
        <Text fontSize="18px" mt={3} mb={2}>
          Page Not Found
        </Text>
        <Text color="gray.500" mb={6}>
          The page you&apos;re looking for does not seem to exist
        </Text>
        <Button
          as={RouterLink}
          to="/"
          colorScheme="teal"
          bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
          color="white"
          variant="solid"
        >
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
};

export default NotFound;
