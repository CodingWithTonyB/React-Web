import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		Company - Slogan
	</h1>
	<br />
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="http://localhost:3001/about-us/aim">Aim</FooterLink>
			<FooterLink href="http://localhost:3001/about-us/vision">Vision</FooterLink>
			<FooterLink href="http://localhost:3000/about-us/Testimonials">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="http://localhost:3001/services/services1">Writing</FooterLink>
			<FooterLink href="http://localhost:3001/services/services2">Internships</FooterLink>
			<FooterLink href="http://localhost:3001/services/services3">Coding</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="http://localhost:3001/contact">Uttar Pradesh</FooterLink>
			<FooterLink href="http://localhost:3001/contact">Ahemdabad</FooterLink>
			<FooterLink href="http://localhost:3001/contact">Indore</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/@Cryptoforyou">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
