/* @refresh reload */
import { render } from 'solid-js/web';
import App from './App';
import '@/styles/main.scss';

const root = document.getElementById('root');

render(() => <App />, root!);
