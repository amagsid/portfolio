import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import Confetti from '../../elements/confetti/Confetti';
init('user_x4FGTrgTjdeEVdrn9HdcN');
import Button from '../../elements/Button/Button';
import { Form, Col, Row } from 'react-bootstrap';
import {
  Input,
  CharAlert,
  CharCount,
  SendCharLimitContainer,
  FormContainer,
} from './ContactStyles';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const message = watch('message') || '';
  const charachterLimit = 500;
  const messageCharsLeft = charachterLimit - message.length;

  const [contactNumber, setContactNumber] = useState('000000');
  const [emailSent, setEmailSent] = useState(false);

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit = (data) => {
    generateContactNumber();
    sendForm(
      'portfolio_contact_form',
      'template_9whli67',
      '#contact-form'
    ).then(
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
    <>
      {emailSent && (
        <>
          <div
            className='bg-confetti-animated'
            style={{
              position: 'absolute',
              top: '0',
              width: '100%',
              height: ' 60%',
              scale: '1.3',
            }}
          ></div>
        </>
      )}

      <FormContainer className='w-full flex'>
        <Form
          className='w-full flex flex-col items-center'
          id='contact-form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type='hidden' name='contact_number' value={contactNumber} />

          <Row className='w-full gap-2'>
            <Col className='flex flex-col justify-between p-0'>
              {/* name */}

              <Form.Group controlId='formBasicText'>
                <Input
                  // size='lg'
                  type='text'
                  name='user_name'
                  placeholder='name'
                  {...register('user_name')}
                  maxLength='30'
                  aria-invalid={errors.user_name ? 'true' : 'false'}
                  required={true}
                  className=' h-[53px]'
                  style={{ borderRadius: ' 6px 0 0 0' }}
                />
              </Form.Group>

              {/* email */}
              <Form.Group controlId='exampleForm.ControlInput1'>
                <Input
                  // size='lg'
                  style={{ borderRadius: '0 0 0 6px' }}
                  type='email'
                  name='user_email'
                  placeholder='email@example.com'
                  {...register('user_email')}
                  required={true}
                  className='h-[53px] '
                />
              </Form.Group>
            </Col>

            {/* message */}
            <Col style={{ flex: '1.9' }} className=' p-0'>
              <Form.Group
                className='p-0 input relative'
                controlId='exampleForm.ControlTextarea1'
              >
                <Input
                  name='message'
                  {...register('message')}
                  maxLength='500'
                  // placeholder='say hi'
                  as='textarea'
                  rows={4}
                  required={true}
                  style={{ maxHeight: '150px', resize: 'none' }}
                  className='flex pb-16 pb-[25px] rounded-r-xl'
                ></Input>
              </Form.Group>

              {/* 
              <h1 className='absolute bottom-0 p-0 m-0'> Char Count</h1> */}
            </Col>
          </Row>
          <SendCharLimitContainer className='transition-all self-end'>
            <CharAlert>
              <CharCount>{messageCharsLeft} </CharCount> / {charachterLimit}
            </CharAlert>
          </SendCharLimitContainer>

          {/* <Button /> */}
          <motion.div
            className='flex justify-center py-8 transition-all max-w-screen max-w-0'
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: 1,
              width: '100%',
              transition: { delay: 0.1 },
            }}
            exit={{
              width: 0,
              opacity: 0,

              transition: {},
            }}
          >
            <Button
              className='transition-all max-w-screen max-w-0'
              width={emailSent ? '40rem' : '30rem'}
              title={
                !emailSent
                  ? ['S', '', 'E', '', 'N', '', 'D']
                  : [
                      `I'LL`,
                      '',
                      'GET',
                      '',
                      'BACK',
                      '',
                      'TO',
                      '',
                      'YOU',
                      '',
                      'SHORTLY',
                      '',
                      ':)',
                    ]
              }
            />
          </motion.div>
        </Form>
      </FormContainer>
    </>
  );
}

export default Contact;
