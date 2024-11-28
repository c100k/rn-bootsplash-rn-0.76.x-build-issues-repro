import React, { ReactElement, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import BootSplash from 'react-native-bootsplash';

export default function App(): ReactElement {
    useEffect(() => {
        BootSplash.hide({ fade: true });
    }, []);

    return (
        <SafeAreaView>
            <Text>TOTO</Text>
        </SafeAreaView>
    );
}
