import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const SwitchColorModel = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" color="green" isChecked={colorMode == "dark"} onChange={toggleColorMode} />
      <Text>Dark Model</Text>
    </HStack>
  );
};

export default SwitchColorModel;
