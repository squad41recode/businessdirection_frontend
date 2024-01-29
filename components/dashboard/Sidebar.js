// "use cliente";
import Image from "next/image";
import { apiRoutes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "@/styles/Dashboard.module.css";
import React from "react";

const Sidebar = () => {
  const menuItems = apiRoutes;
  const pathname = usePathname();
  const [isSidebarExpanded, setSidebarExpanded] = React.useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <aside
        className={`${style.sidebar} ${
          isSidebarExpanded ? style.expanded : style.collapsed
        }`}
      >
        <div
          className="offcanvas-lg  offcanvas-start"
          tabIndex={-1}
          id="offcanvasResponsive"
          aria-labelledby="offcanvasResponsiveLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">
              
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasResponsive"
              aria-label="Close"
            />
          </div>

          <div className="offcanvas-body">
            <div className="mb-0">
              <div className={` ${style.sidebarPerfil} `}>
                <Image
                  className=""
                  src="/img/default-profile-picture.png"
                  alt="foto perfil adm"
                  width={65}
                  height={20}
                />
                <div className="">
                  <span className="">Administrador</span>
                </div>
              </div>
              <ul className={` ${style.sidebarNavLink} `}>
                {menuItems.map((item) => (
                  <li key={item.rotaApi}>
                    <Link
                      href={item.rotaApi}
                      className={`${style.itemLink} ${
                        pathname === "/admin/" + item.rotaApi
                          ? style.active
                          : ""
                      }`}
                    >
                      {item.nomePlural}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
