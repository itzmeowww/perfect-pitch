import Layout from "../components/Layout";
import { Flex, Button, Text } from "@chakra-ui/core";
const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Flex bg="green.400" h="100vh" w="100vw" flexDir="column">
        <Text ml="auto" mr="auto" mt="20vh" fontSize="6xl">
          Perfect Pitch
        </Text>
        <Button ml="auto" mr="auto" mt="20vh">
          Begin
        </Button>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
