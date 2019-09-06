import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import './SideNav.css';

class Sidenav extends Component {
  componentDidMount() {
    M.Sidenav.init(this.Sidenav);
  }

  sideNavLinks() {
    const links = [
      '/autocomplete',
      '/carousel',
      '/chips',
      '/collapsible',
      '/datepicker',
      '/dropdown',
      '/material_box',
      '/modal',
      '/parallax',
      '/scrollspy',
      '/select',
      '/sidenav',
      '/slider',
      '/tabs',
      '/text_input',
      '/timepicker',
      '/toasts',
      '/tooltips'
    ];
    let linkName;
    return links.map((link, i) => {
      linkName = link
        .split('/')[1]
        .split('_')
        .join(' ');
      linkName = linkName.charAt(0).toUpperCase() + linkName.slice(1);
      return (
        <li key={i}>
          <Link to={link}>{linkName}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <nav className="purple darken-4">
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="white-text material-icons">menu</i>
          </a>
          <Link
            to="/"
            className="brand-logo right"
            style={{ paddingRight: '5%' }}
          >
            Reactize
          </Link>
        </nav>
        <ul
          ref={Sidenav => {
            this.Sidenav = Sidenav;
          }}
          id="slide-out"
          className="sidenav sidenav-fixed sidenavOne"
        >
          <li>
            <div className="user-view">
              <Link
                style={{ fontSize: '200%' }}
                className="flow-text purple-text text-darken-4"
                to="/"
              >
                Reactize
              </Link>
            </div>
          </li>
          {this.sideNavLinks()}
        </ul>
      </div>
    );
  }
}

export default Sidenav;
