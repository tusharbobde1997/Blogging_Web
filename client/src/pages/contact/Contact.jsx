import "./contact.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
  return (
    <>
    <div className="page-contact-us">
		<section className="contact-banner top-banner">
			<Container>
				<Row className="justify-content-md-center">
					<Col md="8" className="mx-auto">
						<h2>Contact Us</h2>
						<p>We will always there to help you...</p>

					</Col>
				</Row>
			</Container>
		</section>

		<Container className="resp-mtb">
			<Row className="row align-items-center">
				<Col md="6">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>Follow us on <span>Social</span>.</h4>
					</div>
					<div className="social-share"><i className="topIcon fab fa-facebook-square"></i><i className="topIcon fab fa-twitter-square"></i><i className="topIcon fab fa-pinterest-square"></i><i className="topIcon fab fa-instagram-square"></i></div>
				</Col>

				<Col md="6">
					<img src="././images/contact-us-page.jpg" alt="" className="img-fluid" />
				</Col>
			</Row>
		</Container>
    </div>
    </>
  );
}
