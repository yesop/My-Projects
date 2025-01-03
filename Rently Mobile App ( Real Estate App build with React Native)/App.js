import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {PaperProvider, Provider} from "react-native-paper";
import {persistor, store} from "./redux/store/store";
import {PersistGate} from "redux-persist/integration/react";
import {useFonts} from 'expo-font';
import {useEffect} from "react";
import Navigations from "./components/Navigations";

export default function App() {
    const [loaded, error] = useFonts({
        'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
        'sf-black': require('./assets/fonts/SF-Pro-Display-Black.otf'),
        'sf-bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
        'sf-heavy': require('./assets/fonts/SF-Pro-Display-Heavy.otf'),
        'sf-medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
        'sf-light': require('./assets/fonts/SF-Pro-Display-Light.otf'),
        'sf-regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
        'sf-semiBold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
        'sf-thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
        'sf-ultralight': require('./assets/fonts/SF-Pro-Display-Ultralight.otf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    if (!loaded) {
        return null;
    }
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider>
                    <View style={styles.container}>
                        <Navigations/>
                    </View>
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
