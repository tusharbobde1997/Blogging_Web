import "./header.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header() {
	return (
		<>
		<section className="header-banner top-banner">
			<Container>
				<Row className="justify-content-md-center">
					<Col md="8" className="mx-auto" data-aos="slide-up" data-aos-duration="1500">
						<h2>Welcome to the blogging platform</h2>
						<p>Read Write Interact to explore your mind...</p>

					</Col>
				</Row>
			</Container>
		</section>
		</>
	);
}