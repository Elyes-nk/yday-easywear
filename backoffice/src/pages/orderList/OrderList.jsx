import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/apiCalls";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { format } from "timeago.js";

export default function OrderList() {
  // const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  // const navigate = useNavigate(); // <-- get history from hook

  // useEffect(() => {
  //   if (admin) {
  //     navigate("/login");
  //   }
  // }, [admin, navigate]);

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);

  useEffect(() => {
    getOrders(dispatch);
  }, [dispatch]);

  const columns = [
    {
      field: "userId",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return <span>{params?.formattedValue?.username}</span>;
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 220,
      renderCell: (params) => {
        return <span>{format(params?.formattedValue)} </span>;
      },
    },
    {
      field: "amount",
      headerName: "Revenue",
      width: 200,
      renderCell: (params) => {
        return <span>{params?.formattedValue} €</span>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/order/" + params.row._id}>
              <button className="orderListEdit">Edit</button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="orderList">
          <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={8}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}
