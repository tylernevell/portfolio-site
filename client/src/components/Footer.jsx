import React from 'react';
import FadeInSection from './FadeInSection';

function Footer() {
    return (
        <div>
            <FadeInSection>
                <footer>
                    <a href="https://github.com/tylernevell/portfolio-site" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                        <span className="link" style={{color: "#696969"}}>&#169; 2021 Tyler Nevell</span>
                    </a>
                </footer>
            </FadeInSection>
        </div>
    );
}
export default Footer;