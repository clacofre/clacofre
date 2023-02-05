import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Contacto } from "../pages/Contacto";
import { HomePage } from "../pages/HomePage";
import { Proyectos } from "../pages/Proyectos";
export const Navigation = () => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "nav-active" : "";
  };

  const routes = [
    { to: "/", label: "Home", component: HomePage },
    { to: "/proyectos", label: "Proyectos", component: Proyectos },
    { to: "/contacto", label: "Contacto", component: Contacto },
  ];
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <ul>
            {routes.map((route) => {
              return (
                <li>
                  <NavLink to={route.to} className={isActive}>
                    {route.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map((route) => {
            return (
              <Route path={route.to} element={<route.component />} />
            );
          })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
};
