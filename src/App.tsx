import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div>
          <Toaster/>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Homepage />} />
                    <Route path="shop" element={<Homepage />} />
                    <Route path="about" element={<Homepage />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;
