// lovingly borrowed from https://www.selbekk.io/blog/how-to-fade-in-content-as-it-scrolls-into-view
import React, { useState, useRef, useEffect } from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        const tempObj = observer.observe(domRef.current);
        return () => tempObj;
    }, []);

    return(
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            {props.children}
        </div>
    );
}

export default FadeInSection;