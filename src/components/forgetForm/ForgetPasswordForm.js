// Import

// Library
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { H3 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import { Form, Input, Label } from '../../styles/forms';

export default function ForgetPasswordForm() {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .lowercase()
          .email('Invalid email address')
          .required('Email is required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Send Email Function
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <Label>
          <H3>Email</H3>
          <Input type="text" name="email" placeholder="Email" />{' '}
        </Label>
        <Button>
          <H3 WHITE>Send Email</H3>
        </Button>
      </Form>
    </Formik>
  );
}
