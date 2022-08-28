
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div >
            <Link
                style={{ textDecoration: match ? "" : "none", color: match ? '#10B981' : '#D1D5DB', fontWeight: match ? 'bold' : '500', background: match ? 'rgba(255,255,255, 0.08)' : '', padding: "9px 16px" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;