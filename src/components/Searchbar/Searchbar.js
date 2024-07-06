import { Formik, Form, Field } from 'formik';

import { SearchbarBlock } from './SearchbarStyled';

export const Searchbar = ({ onAnswerText }) => {
  return (
    <SearchbarBlock className="searchbar">
      <Formik
        initialValues={{ search: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          onAnswerText({
            ...values,
          });
          actions.resetForm();
        }}
      >
        <Form>
          <label>Search</label>
          <Field
            name="search"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </SearchbarBlock>
  );
};
