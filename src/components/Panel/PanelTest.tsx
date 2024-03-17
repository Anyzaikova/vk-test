import React, { useState } from 'react';
import { Panel, View, Group, CellButton } from "@vkontakte/vkui";
import CatFact from "../CatFact/CatFact";
import AgeByName from "../AgeByName/AgeByName";

const PanelTest: React.FC = () => {
    const [activePanel, setActivePanel] = useState<string>('panel1');

    return (
        <View activePanel={activePanel}>
            <Panel id="panel1">
                <Group>
                    <CellButton onClick={() => setActivePanel('panel2')}>Перейти к возрасту</CellButton>
                    <CatFact />
                </Group>
            </Panel>
            <Panel id="panel2">
                <Group>
                    <CellButton onClick={() => setActivePanel('panel1')}>Перейти к котикам</CellButton>
                    <AgeByName />
                </Group>
            </Panel>
        </View>
    );
};

export default PanelTest;
