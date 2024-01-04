import { useEffect } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { debounce } from 'utils/debounce';

import { useCharacters } from 'hooks/useCharacters';

import { StyledForm, StyledField, Button, SearchIcn } from './SearchBar.styled';

interface FormValues {
  query: string;
}

export const SearchBar = () => {
  const { handleSearchSubmit } = useCharacters();
  const initialValues = { query: '' };

  const [debouncedSubmit, teardown] = debounce((query: string) => {
    handleSearchSubmit(query.trim());
  }, 600);

  useEffect(() => {
    return () => teardown();
  }, [teardown]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: FormikHelpers<FormValues>['setFieldValue']
  ) => {
    const value = e.target.value;
    setFieldValue('query', value);
    debouncedSubmit(value);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={values => debouncedSubmit(values.query)}>
      {({ setFieldValue, dirty, isSubmitting }) => (
        <StyledForm>
          <StyledField
            type="text"
            name="query"
            placeholder="Character name..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, setFieldValue)}
          />
          <Button type="submit" disabled={!dirty || isSubmitting}>
            <SearchIcn />
          </Button>
        </StyledForm>
      )}
    </Formik>
  );
};
