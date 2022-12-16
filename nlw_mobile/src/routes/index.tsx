import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./app.routes";

interface IndexProps { }

export function Routes(props: IndexProps) {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
};
