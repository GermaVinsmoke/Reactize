import React from 'react';
import ThirdHeader from './Headings/ThirdHeader';
import './SideNav.css';

const Footer = () => {
  return (
    <footer>
      <div className="divider purple darken-4" />
      <div className="row buymecoffee-container">
        <iframe
          className="buymecoffee-style"
          src="https://www.buymeacoffee.com/widget/page/GermaVinsmoke?description=Support%20me%20on%20Buy%20me%20a%20coffee!&amp;color=%23FF813F"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
