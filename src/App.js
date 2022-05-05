import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import  store  from './redux/store/store';

import Home from "./views/home";
import './styles/styles.scss';

const App = () => {

    return (
        <Provider store={ store }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="*"
                        element={
                        <main style={{ padding: "1rem" }}>
                            <p>No hay nada para mostrar</p>
                        </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;