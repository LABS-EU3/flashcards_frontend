// Import

// Library
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Styled
import { H3 } from '../../styles/typography';
import { Button } from '../../styles/buttons';
import { Form, Input, Label } from '../../styles/forms';

export default function ResetPasswordForm() {
  return (
    <Formik
      initialValues={{
        password: '',
        passwordconfirm: '',
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .min(8, 'new password needs to be at least 8 characters')
          .required('New password is required'),
        passwordconfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords do not match')
          .required('Please confirm your new password'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Send Reset Password function
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form>
        <Label>
          <H3>Password</H3>
          <Input type="text" name=" password" placeholder="Password" />{' '}
        </Label>
        <Label>
          <H3>Re-Enter Password</H3>
          <Input
            type="text"
            name=" passwordconfirm"
            placeholder="Re-Enter Password"
          />{' '}
        </Label>
        <Button>
          <H3 WHITE>Confirm</H3>
        </Button>
      </Form>
    </Formik>
  );
}
