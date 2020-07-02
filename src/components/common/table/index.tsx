import React, { forwardRef } from 'react';
import { Box } from '@material-ui/core';
import MaterialTable from 'material-table';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from '@material-ui/icons';

export default function Table(props: TableState) {
  const tableIcons: any = {
    Add: forwardRef((props) => <AddBox {...props} />),
    Check: forwardRef((props) => <Check {...props} />),
    Clear: forwardRef((props) => <Clear {...props} />),
    Delete: forwardRef((props) => <DeleteOutline {...props} />),
    DetailPanel: forwardRef((props) => <ChevronRight {...props} />),
    Edit: forwardRef((props) => <Edit {...props} />),
    Export: forwardRef((props) => <SaveAlt {...props} />),
    Filter: forwardRef((props) => <FilterList {...props} />),
    FirstPage: forwardRef((props) => <FirstPage {...props} />),
    LastPage: forwardRef((props) => <LastPage {...props} />),
    NextPage: forwardRef((props) => <ChevronRight {...props} />),
    PreviousPage: forwardRef((props) => <ChevronLeft {...props} />),
    ResetSearch: forwardRef((props) => <Clear {...props} />),
    Search: forwardRef((props) => <Search {...props} />),
    SortArrow: forwardRef((props) => <ArrowDownward {...props} />),
    ThirdStateCheck: forwardRef((props) => <Remove {...props} />),
    ViewColumn: forwardRef((props) => <ViewColumn {...props} />),
  };

  return (
    <Box>
      <MaterialTable
        icons={tableIcons}
        columns={props.columns}
        data={props.data}
        title={props.title}
        actions={props.actions}
      />
    </Box>
  );
}
