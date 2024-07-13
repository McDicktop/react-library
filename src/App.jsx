import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PageOne, PageTwo } from "./components/test";
// import Home from "./components/test/Home";
import Homepage from "./components/Homepage/Homepage";
import GridView from "./components/GridView";
import InspectCard from "./components/InspectCard";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Homepage />} /> */}
                {/* <Route path="/book/:id" element={<>} */}
                {/* <Route path="/" element={<PageOne />} />
                <Route path="/:id" element={<PageTwo />} /> */}

                <Route path="/books/" element={<Homepage />}>
                    <Route index element={<GridView />} />
                    <Route path=":id" element={<InspectCard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;




// x - количество страниц
// начало = x(n-1) + 1; конец = xn
