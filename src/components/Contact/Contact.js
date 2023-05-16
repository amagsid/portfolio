import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiMailSend } from 'react-icons/bi';

import { init, sendForm } from 'emailjs-com';
init('user_x4FGTrgTjdeEVdrn9HdcN');
import { Section, SectionText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';

import { Form, Container } from 'react-bootstrap';

import { InputField } from './ContactStyles';

function Contact() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const message = watch('message') || '';
	const messageCharsLeft = 1500 - message.length;

	const [contactNumber, setContactNumber] = useState('000000');
	const [emailSent, setEmailSent] = useState(false);

	const generateContactNumber = () => {
		const numStr = '000000' + ((Math.random() * 1000000) | 0);
		setContactNumber(numStr.substring(numStr.length - 6));
	};

	const onSubmit = (data) => {
		console.log(data);
		generateContactNumber();
		sendForm('portfolio_contact_form', 'template_9whli67', '#contact-form').then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
				setEmailSent(true);
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
	};

	return (
		<Section>
			<Section id="about">
				<MovingSectionTitle sectionTitle="GET IN TOUCH"></MovingSectionTitle>
				<Container fluid>
					{emailSent && <p>🚀 Your message was sent , I'll get back to you shortly!</p>}
					<Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
						<input type="hidden" name="contact_number" value={contactNumber} />

						{/* name */}
						<Form.Group className="mb-1" controlId="formBasicText">
							<Form.Control
								className="mb-2 input-field"
								size="lg"
								type="text"
								name="user_name"
								placeholder="name"
								{...register('user_name')}
								maxLength="30"
								aria-invalid={errors.user_name ? 'true' : 'false'}
								required={true}
							/>
						</Form.Group>

						{/* email */}
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control
								style={{
									backgroundColor: 'rgb(15,22,90,0)',
									color: 'white',
								}}
								size="lg"
								type="email"
								name="user_email"
								placeholder="email@example.com"
								{...register('user_email')}
							></Form.Control>
						</Form.Group>
						{/* message */}
						<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
							<Form.Control
								style={{
									backgroundColor: 'rgb(15,22,90,0)',
									color: 'white',
								}}
								size="lg"
								name="enter your message"
								{...register('message')}
								maxLength="1500"
								placeholder="Message"
								as="textarea"
								rows={6}
							/>
						</Form.Group>

						{/* charachter count */}
						<p className="message-chars-left">{messageCharsLeft} characeters left</p>
						<br />
						{/* send button */}
						<button className="pulse send-icon" type="submit" value="Send">
							Send <BiMailSend className="send-icon" size={20} />
						</button>
					</Form>
				</Container>
			</Section>
		</Section>
	);
}

export default Contact;
