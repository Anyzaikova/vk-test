import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConfigProvider, AdaptivityProvider } from '@vkontakte/vkui';
import bridge from "@vkontakte/vk-bridge";

bridge.send("VKWebAppInit");

ReactDOM.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <App />
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById('root')
);