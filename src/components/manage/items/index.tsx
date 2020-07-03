import React, { useState, Fragment } from 'react';
import Table from '../../common/table';
import { connect } from 'react-redux';
import { fetchItems } from 'actions/items.action';
import { useTranslation } from 'react-i18next';
import AddingForm from './adding-form';
import AddBox from '@material-ui/icons/AddBox';

const ManageItems = function (props: any) {
  const { t } = useTranslation();
  const [isAddingItem, setIsAddingItem] = useState(false);

  const columns: TableColumn[] = [
    { title: t('manage.items.name'), field: 'name' },
    { title: t('manage.items.image'), field: 'image' },
    { title: t('manage.items.price'), field: 'price' },
    { title: t('manage.items.quantity'), field: 'quantity' },
    { title: t('manage.items.status'), field: 'status' },
  ];

  const onClickAdd = () => {
    setIsAddingItem(true);
  };

  const hanldeCloseAddingForm = () => {
    setIsAddingItem(false);
  };

  const actions: TableAction[] = [
    {
      icon: () => <AddBox />,
      onClick: onClickAdd,
      tooltip: t('manage.items.add'),
      isFreeAction: true,
    },
  ];
  return (
    <Fragment>
      <Table
        columns={columns}
        data={props.items}
        title={t('manage.items.tableTitle')}
        actions={actions}
      />
      {isAddingItem && (
        <AddingForm isOpen={isAddingItem} onClose={hanldeCloseAddingForm} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  const { items } = state;
  return { items };
};

export default connect(mapStateToProps, { fetchItems })(ManageItems);
