import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// images
import Logo from "../../assets/images/logo.png";

const AccountLayout = ({ bottomLinks, children }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (document.body) document.body.classList.add("authentication-bg");

    return () => {
      if (document.body) document.body.classList.remove("authentication-bg");
    };
  }, []);

  return (
    <>
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <Card.Header className="pt-4 pb-4 text-center bg-primary">
                  <Link to="/">
                    <span>
                      <img src={Logo} alt="" height="18" />
                    </span>
                  </Link>
                </Card.Header>
                <Card.Body className="p-4">{children}</Card.Body>
              </Card>

              {bottomLinks}
            </Col>
          </Row>
        </Container>
      </div>
      <footer className="footer footer-alt">
        {t("2010 - 2022 © Sujon- sujon.one")}
      </footer>
    </>
  );
};

export default AccountLayout;
