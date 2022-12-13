import { Heading, Input, VStack } from "native-base";
import { Header } from "react-native/Libraries/NewAppScreen";

import Logo from "../assets/logo.svg"

interface NewProps { }

export function New(props: NewProps) {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Criar novo bolão" />
            <VStack mt={8} mx={5} alignItems="center">
                <Logo />
                <Heading fontFamily="heading" color="white" fontSize="xl" my={8} textAlign="center">
                    Crie seu próprio bolão da copa e compartilhe entre amigos!
                </Heading>
                <Input
                    mb={2}
                />
            </VStack>
        </VStack>
    );
}
