import { Center, Text } from "native-base";

interface SigninProps { }

export function Signin(props: SigninProps) {
    return (
        <Center flex={1} bgColor="gray.900" >
            <Text color="white" fontSize={24} fontFamily="heading">
                Signin
            </Text>
        </Center>
    );
}
