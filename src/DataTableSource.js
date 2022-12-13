import profile from "./assets/demo.jpg";
export const columns = [
  { field: "id", headerName: "ID", width: 100 },

  {
    field: "user",
    headerName: "User",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 190,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 190 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 190,
  },
  {
    field: "status",
    headerName: "Status",
    width: 190,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 6,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "pending",
  },
  {
    id: 5,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "active",
  },
  {
    id: 4,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "passive",
  },
  {
    id: 3,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "passive",
  },
  {
    id: 2,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "pending",
  },
  {
    id: 61,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "active",
  },
  {
    id: 51,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "active",
  },
  {
    id: 41,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "active",
  },
  {
    id: 31,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "passive",
  },
  {
    id: 21,
    username: "Snow",
    email: "s@gmail.com",
    img: "https://imaghe.org/wp-content/uploads/2022/01/Imaghe-Logo-web.png",
    age: 35,
    status: "pending",
  },
];
