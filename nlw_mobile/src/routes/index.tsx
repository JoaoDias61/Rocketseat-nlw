import { NavigationContainer } from "@react-navigation/native"
import { SignIn } from "phosphor-react-native";
import { AppRoutes } from "./app.routes";

import { useAuth } from "../hooks/useAuth"

interface IndexProps { }

export function Routes(props: IndexProps) {
    const { user } = useAuth();
    return (
        <NavigationContainer>
            {
                user.name ? <AppRoutes /> :
                    <SignIn />
            }
            <SignIn />
        </NavigationContainer>
    )
};
