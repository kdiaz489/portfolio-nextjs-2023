import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
  IconButton,
} from "@chakra-ui/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import ProfileArray from "./ProfileArray";

export default function Contact({ color }: { color: string }) {
  const profile = ProfileArray();
  const linkedin = () => {
    if (typeof window !== "undefined") {
      window.open(`${profile.linkedin}`, "_blank", "noreferrer,noopener");
    }
  };

  const email = () => {
    if (typeof window !== "undefined") {
      window.open(`mailto:${profile.email}`, "_blank", "noreferrer,noopener");
    }
  };
  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                04
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack data-aos="fade-up"  spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Let&apos;s stay in touch!</Heading>
            <Text color={"gray.600"} fontSize={"xl"} px={4}>
              {profile.contact}
            </Text>
            <Text
              color={`${color}.500`}
              fontWeight={600}
              fontSize={"lg"}
              px={4}
            >
              {profile.email}
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <IconButton
                  icon={<FaLinkedin size={28} />}
                  variant="outline"
                  borderStyle="none"
                  _hover={{ cursor: "pointer" }}
                  aria-label="linked in button"
                  onClick={linkedin}
                />

                <IconButton
                  icon={<FaEnvelope size={28} />}
                  variant="outline"
                  borderStyle="none"
                  _hover={{ cursor: "pointer" }}
                  aria-label="email button"
                  onClick={email}
                />
              </HStack>
            </Center>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
