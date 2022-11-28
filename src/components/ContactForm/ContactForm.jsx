import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  AddContactBtn,
  ErrorMessageCustom,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .min(2, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .min(5, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const isNameExistInPhonebook = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isNameExistInPhonebook) {
      toast.error(`${name} is already in contacts`, {
        pauseOnHover: false,
      });
      return;
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <FormLabelContainer>
          <Field name="name" type="text" placeholder="Anne-Marie O'Connor" />
          <FormLabel>Name</FormLabel>
          <ErrorMessage name="name" component="span">
            {() => (
              <ErrorMessageCustom>
                Letters are required (2-30 symbols)
              </ErrorMessageCustom>
            )}
          </ErrorMessage>
        </FormLabelContainer>
        <FormLabelContainer>
          <Field name="number" type="tel" placeholder="+38-(012)-345-67-89" />
          <FormLabel>Number</FormLabel>
          <ErrorMessage name="number" component="span">
            {() => (
              <ErrorMessageCustom>
                Digits are required (5-20 symbols)
              </ErrorMessageCustom>
            )}
          </ErrorMessage>
        </FormLabelContainer>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
