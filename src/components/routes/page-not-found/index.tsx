import React from 'react';
import { Alert } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

export default function () {
  const { t } = useTranslation();
  return <Alert severity='error'>{t('pageNotFound')}</Alert>;
}
