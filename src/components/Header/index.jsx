import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <Link className="header__link header__title" to="/">
              nchanh fe
            </Link>
          </Col>

          <Col xs="auto">
            <NavLink
              end
              to="photos"
              className={({ isActive }) =>
                isActive ? 'header__link--active' : 'header__link'
              }
            >
              Redux Photo-app
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
