import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import {
  getMembers,
  selectMembers,
  remove,
} from "./../features/members/membersSlice";

const columns = [
  // { field: "_id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    flexGrow: 1,
    flex: 1,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last name",
    flex: 1,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    editable: false,
  },
  {
    headerName: "Actions",
    field: "",
    flex: 1,
    headerAlign: "center",
    renderCell: (params) => {
      return <ButtonSet params={params} />;
    },
  },
];

function ButtonSet({ params }) {
  // console.log("🚀 ~ file: EditMembers.jsx ~ line 39 ~ ButtonSet ~ params", params)
  const dispatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Button
        variant="contained"
        color="warning"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={params.hasFocus ? 0 : -1}
        component={NavLink}
        to={`/admin/members/update/${params.row._id}`}
      >
        Update
      </Button>
      <Button
        variant="contained"
        color="error"
        size="small"
        style={{ marginLeft: 16 }}
        tabIndex={params.hasFocus ? 0 : -1}
        onClick={() => dispatch(remove(params.row._id))}
      >
        Delete
      </Button>
    </div>
  );
}

function EditMembers() {
  const dispatch = useDispatch();
  const members = useSelector(selectMembers);

  useEffect(() => {
    dispatch(getMembers());
  }, []);

  return (
    <div>
      <h1>Members</h1>
      <div style={{ marginBlockEnd: "1em" }}>
        <Button
          variant={"contained"}
          color="primary"
          component={NavLink}
          to="/admin/members/add"
        >
          Add Members
        </Button>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        {/* <pre>
        {JSON.stringify(members, null, ' ')}
      </pre> */}
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          rows={members || []}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          getRowId={(row) => row._id}
        />
      </div>
    </div>
  );
}

export default EditMembers;
