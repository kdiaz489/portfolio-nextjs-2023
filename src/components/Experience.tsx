import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
  
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";
import TagsArray from "./TagsArray";
import { Fade } from "react-awesome-reveal";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  const handleSelected = (value) => {
    setSelected(value);
  };

  let cardColor = useColorModeValue('white', '#12181f')

  return (
    <Container maxW={"3xl"} id="experience">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack direction="row" px={4}>
          <HStack mx={4}>
            <Text color={`${color}.400`} fontWeight={800}>
              02
            </Text>
            <Text fontWeight={800}>Experience</Text>
          </HStack>
          <Divider orientation="horizontal" />
        </Stack>
        <Center px={4}>
          <ButtonGroup variant="outline">
            {options.map((option) => (
              <Button
                key={option.value}
                colorScheme={selected === option.value ? `${color}` : "gray"}
                onClick={() => handleSelected(option.value)}
              >
                {option.value}
              </Button>
            ))}
          </ButtonGroup>
        </Center>
        <Stack px={4} spacing={4}>
          {experience
            .filter((exp) => exp.tags.includes(selected))
            .map((exp) => (
              <Card key={exp.company} bg={cardColor} data-aos="fade-up" size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      <Image src={exp.image} h={50} w={50} bg="white" alt="company logo" />
                      <Box px={2}>
                        <Text fontWeight={600}>{exp.company}</Text>
                        <Text>{exp.position}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {exp.duration}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List spacing={3}>
                      {exp.listItems.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <HStack spacing={2}>
                    {exp.badges.map((badge) => (
                      <Badge key={badge.name} colorScheme={badge.colorScheme}>
                        {badge.name}
                      </Badge>
                    ))}
                  </HStack>
                </CardFooter>
              </Card>
            ))}
        </Stack>
      </Stack>
    </Container>
  );
}
