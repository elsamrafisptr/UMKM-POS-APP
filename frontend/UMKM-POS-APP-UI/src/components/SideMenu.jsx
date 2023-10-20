import React from "react";

export default function SideMenu() {
    return (
        <>
            <aside className="side-menu absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none z-50">
                <div className="side-menu-overlay absolute block top-0 left-0 w-full h-full bg-slate-500 opacity-30"></div>
                <div className="side-menu-content relative top-0 left-0 z-10 w-3/4 h-full max-w-sm bg-white drop-shadow-sm"></div>
            </aside>

            
        </>
    )
}
