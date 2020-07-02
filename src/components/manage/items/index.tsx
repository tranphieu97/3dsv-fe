import React from 'react';
import Table from '../../common/table';
import { connect } from 'react-redux';
import { fetchItems } from 'actions/items.action';
import { useTranslation } from 'react-i18next';

const ManageItems = function (props: any) {
  const { t } = useTranslation();

  const columns: TableColumn[] = [
    { title: t('manage.items.name'), field: 'name' },
    { title: t('manage.items.image'), field: 'image' },
    { title: t('manage.items.price'), field: 'price' },
    { title: t('manage.items.quantity'), field: 'quantity' },
    { title: t('manage.items.status'), field: 'status' },
  ];
  return (
    <Table
      columns={columns}
      data={props.items}
      title={t('manage.items.tableTitle')}
    />
  );
};

const mapStateToProps = (state: any) => {
  const { items } = state;
  return { items };
};

export default connect(mapStateToProps, { fetchItems })(ManageItems);
