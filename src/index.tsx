import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppController } from './controllers/appController';
import './index.css';

const appController = new AppController();

const container = document.querySelector('#app');

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <BrowserRouter>
            <App appController={appController} />
        </BrowserRouter>,
    );
} else {
    console.log('Not found #app');
}
