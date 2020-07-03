import React from 'react';
import FullscreenDialog from '../../../common/fullscreen-dialog';
import { useTranslation } from 'react-i18next';

interface ItemAddingFromProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function ItemAddingFrom(props: ItemAddingFromProps) {
  const { t } = useTranslation();

  const onSaveItem = () => {};

  return (
    <FullscreenDialog
      title={t('manage.items.addingForm.title')}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onFinish={onSaveItem}
      finishText={t('manage.items.addingForm.save')}
    ></FullscreenDialog>
  );
}
