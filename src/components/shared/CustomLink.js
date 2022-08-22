
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div >
            <Link
                style={{ textDecoration: match ? "" : "none", color: match ? 'black' : 'white', fontWeight: match ? 'bold' : '500', background: match ? '#E4F0F6' : '', }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;