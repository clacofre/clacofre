import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink , Navigate} from "react-router-dom";
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({isActive}) => isActive ? 'nav-active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/proyectos" end className={({isActive}) => isActive ? 'nav-active' : ''}>
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" end className={({isActive}) => isActive ? 'nav-active' : ''}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/proyectos" element={<h1>Proyectos</h1>} />
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
