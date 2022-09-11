import { PHOTO_CATEGORY_OPTIONS } from 'constants/globals';
import PropTypes from 'prop-types';
import React from 'react';
import { FastField, Form, Formik } from 'formik';
import { Button, FormGroup } from 'reactstrap';

import './FormPhoto.scss';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: '',
    categoryId: null,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log('Submit: ', values)}
    >
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });

        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
