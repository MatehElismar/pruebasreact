import React from 'react'

export default function AutoScrollToTop({ children, location }) {
    React.useEffect(() => window.scrollTo(0, 0), [location.pathname])
    return (children)
} 