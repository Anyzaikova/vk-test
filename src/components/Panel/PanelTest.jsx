import {Panel, View, Group, CellButton} from "@vkontakte/vkui";
import {useState} from "react";
import CatFact from "../CatFact/CatFact";
import AgeByName from "../AgeByName/AgeByName";


const PanelTest = () => {
    const [activePanel, setActivePanel] = useState ('panel1');
    return (
        <View activePanel={activePanel}>
            <Panel id="panel1">
                <Group>
                    <CellButton onClick={() => setActivePanel ('panel2')}>Go to panel 2</CellButton>
                    <CatFact/>
                </Group>
            </Panel>
            <Panel id="panel2">
                <Group>
                    <CellButton onClick={() => setActivePanel ('panel1')}>Go to panel 1</CellButton>
                    <AgeByName/>
                </Group>
            </Panel>
        </View>
    )
}

export default PanelTest;