import React from 'react';
import {
    AppRoot,
    SplitLayout,
    SplitCol,
    View,
    Panel,
    PanelHeader,
    Header,
    Group,
    SimpleCell,
    usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import {ConfigProvider, AdaptivityProvider} from '@vkontakte/vkui';
import PanelTest from "./components/Panel/PanelTest";

const App = () => {
    const platform = usePlatform ();

    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout header={platform !== 'vkcom' && <PanelHeader />}>
                        <SplitCol autoSpaced>
                            <View activePanel="main">
                                <Panel id="main">
                                    <PanelHeader />
                                    <Group header={<Header mode="secondary">Тестовое задание</Header>}>
                                        <SimpleCell>
                                            <PanelTest />
                                        </SimpleCell>
                                    </Group>
                                </Panel>
                            </View>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;