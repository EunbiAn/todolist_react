import React, { useState, useEffect } from 'react';
import './Layout.css';
function Layout({children}) {
    return (
        <>
          <div className="background">
            <div className="container">
              {children}
            </div>
          </div>
        </>
      );
}

export default Layout;