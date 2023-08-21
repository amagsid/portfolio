import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init('user_x4FGTrgTjdeEVdrn9HdcN');
import { Section, SectionText } from '../../styles/GlobalComponents';
import MovingSectionTitle from '../SectionTitle/SectionTitle';
import { Form, Container, Col, Row } from 'react-bootstrap';
import { Input, CharAlert, CharCount, SendCharLimitContainer, SendButton, FormContainer } from './ContactStyles';

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
		<Section id="contact">
			<MovingSectionTitle sectionTitle={!emailSent ? 'GET IN TOUCH' : `SENT🚀I'LL BE IN TOUCH SHORTLY `} emailSent={emailSent}></MovingSectionTitle>
			{emailSent && <div className="bg-confetti-animated" style={{ position: 'absolute', width: '100%', height: ' 100%' }}></div>}
			{/* </div>
			{/* </Confetti> */}

			<FormContainer>
				<Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
					<input type="hidden" name="contact_number" value={contactNumber} />

					<Row>
						<Col style={{ paddingLeft: 0, paddingRight: 2 }} className="mb-2">
							{/* name */}

							<Form.Group controlId="formBasicText">
								<Input
									// size="lg"
									type="text"
									name="user_name"
									placeholder="name"
									{...register('user_name')}
									maxLength="30"
									aria-invalid={errors.user_name ? 'true' : 'false'}
									required={true}
								/>
							</Form.Group>
						</Col>

						<Col style={{ paddingRight: 0, paddingLeft: 2 }}>
							{/* email */}
							<Form.Group controlId="exampleForm.ControlInput1">
								<Input type="email" name="user_email" placeholder="email@example.com" {...register('user_email')} required={true} />
							</Form.Group>
						</Col>
					</Row>

					<Row>
						{/* message */}
						<Form.Group className="p-0 input" controlId="exampleForm.ControlTextarea1">
							<Input
								name="message"
								{...register('message')}
								maxLength="1500"
								placeholder="say hi"
								as="textarea"
								rows={4}
								required={true}
								style={{ maxHeight: '300px' }}
							></Input>

							<SendCharLimitContainer style={{ display: 'flex' }}>
								<CharAlert className="message-chars-left">
									<CharCount>{messageCharsLeft} </CharCount> characeters left
								</CharAlert>
								{/* <Button /> */}
								<SendButton className="px-20 py-3 rounded-md text-[20px]" style={{ fontWeight: 200, letterSpacing: '1px' }}>
									{' '}
									Send
								</SendButton>
							</SendCharLimitContainer>
						</Form.Group>
					</Row>
				</Form>
			</FormContainer>
		</Section>
	);
}

export default Contact;
