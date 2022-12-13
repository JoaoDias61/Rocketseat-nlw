import { Heading, Input, VStack, Text } from "native-base";
import { Header } from "react-native/Libraries/NewAppScreen";

import Logo from "../assets/logo.svg"
import { Button } from "../components/Button";

interface FindProps { }

export function Find(props: FindProps) {
    return (
        <VStack flex={1} bgColor="gray.900">
            <Header title="Buscar po código" showBackButton />
            <VStack mt={8} mx={5} alignItems="center">
                <Heading fontFamily="heading" color="white" fontSize="xl" mb={8} textAlign="center">
                    Encontre um bolão através de seu código único! Crie seu próprio bolão da copa e compartilhe entre amigos.
                </Heading>
                <Input
                    mb={2}
                    placeholder="Qual o código do bolão?"
                />
                <Button
                    title="BUSCAR BOLÃO"
                />
            </VStack>
        </VStack>
    );
}
