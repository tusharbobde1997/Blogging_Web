import "./about.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
	<>
    <div className="page-about-us">
		<section className="about-banner top-banner">
			<Container>
				<Row className="justify-content-md-center">
					<Col md="8" className="mx-auto">
						<h2>About Us</h2>
						<p>This is a great platform to show your talents and interests.And we are providing various categories to talk about.This Website is providing interaction with Bloggers or experts in specific field...</p>
					</Col>
				</Row>
			</Container>
		</section>

		<Container className="resp-mtb">
			<Row className="row col-mb-50 mb-0">
				<Col md="4">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>Why choose <span>Us</span>.</h4>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.</p>
				</Col>

				<Col md="4">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>Our <span>Mission</span>.</h4>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.</p>
				</Col>

				<Col md="4">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>What we <span>Do</span>.</h4>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.</p>
				</Col>
			</Row>
		</Container>

		<Container className="resp-mtb">
			<Row className="row align-items-center">
				<Col md="6">
					<img src="././images/about-us-1.jpg" alt="" className="img-fluid" />
				</Col>

				<Col md="6">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>Our <span>Objective</span>.</h4>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.</p>
					</Col>
			</Row>
		</Container>

		<Container className="resp-mtb">
			<Row className="row align-items-center">
				<Col md="6">
					<div className="heading-block fancy-title border-bottom-0 title-bottom-border">
						<h4>Future <span>Endaevours</span>.</h4>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quidem minus id omnis, nam expedita, ea fuga commodi voluptas iusto, hic autem deleniti dolores explicabo labore enim repellat earum perspiciatis.</p>
				</Col>

				<Col md="6">
					<img src="././images/about-us-2.jpg" alt="" className="img-fluid" />
				</Col>
			</Row>
		</Container>
    </div>
	</>
  );
}
