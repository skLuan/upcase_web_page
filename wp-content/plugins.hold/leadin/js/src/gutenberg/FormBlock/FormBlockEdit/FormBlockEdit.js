import React, { Fragment } from 'react';
import { portalId, oauth } from '../../../constants/leadinConfig';
import UISpacer from '../../UIComponents/UISpacer';
import AuthWrapper from '../../Auth/AuthWrapper';
import PreviewForm from './PreviewForm';
import FormSelect from './FormSelect';
import FormGutenbergPreview from './FormGutenbergPreview';

export default function FormBlockEdit({
  attributes,
  isSelected,
  setAttributes,
}) {
  const { formId, formName, preview } = attributes;

  const formSelected = portalId && formId;

  const handleChange = selectedForm => {
    setAttributes({
      portalId,
      formId: selectedForm.value,
      formName: selectedForm.label,
    });
  };

  if (preview) {
    return <FormGutenbergPreview />;
  }

  return (
    <Fragment>
      {(isSelected || !formSelected) &&
        (!oauth ? (
          <AuthWrapper>
            <FormSelect
              formId={formId}
              formName={formName}
              handleChange={handleChange}
            />
          </AuthWrapper>
        ) : (
          <FormSelect
            formId={formId}
            formName={formName}
            handleChange={handleChange}
          />
        ))}
      {formSelected && (
        <Fragment>
          {isSelected && <UISpacer />}
          <PreviewForm portalId={portalId} formId={formId} />
        </Fragment>
      )}
    </Fragment>
  );
}
