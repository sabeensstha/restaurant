import { useEffect, useState } from "react";
import _ from "lodash";

const url = "https://62da3c449eedb6996369254e.mockapi.io/student/v1/new";
const Asp = () => {
  const [data, setdata] = useState([]);
  // const [c, cc] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     c<10 ? cc(c+1) : cc(c)
  //   },500)
  // })
  const fetchUser = async () => {
    const response = await fetch(url);
    const dataa = await response.json();
    console.log(dataa);
    setdata(dataa);
  };

  console.log(data);
  useEffect(() => {
    fetchUser();
  }, []);
  // const employees = [
  //   {id: 4, name: 'Dean', country: 'Denmark'},
  //   {id: 3, name: 'Carl', country: 'Canada'},
  //   {id: 2, name: 'Bob', country: 'Belgium'},
  //   {id: 1, name: 'Alice', country: 'Austria'},
  //   {id: 5, name: 'Ethan', country: 'Egypt'},
  // ];

  // 👇️ sort by Numeric property ASCENDING (1 - 100)
  // const numAscending = [...employees].sort((a, b) => a.id - b.id);
  // // console.log(numAscending);

  // // 👇️ sort by Numeric property DESCENDING (100 - 1)
  // const numDescending = [...employees].sort((a, b) => b.id - a.id);
  // // console.log(numDescending);

  // // 👇️ sort by String property ASCENDING (A - Z)
  // const strAscending = [...employees].sort((a, b) =>
  //   a.name > b.name ? 1 : -1,
  // );
  // // console.log(strAscending);

  // // 👇️ sort by String property DESCENDING (Z - A)
  // const strDescending = [...employees].sort((a, b) =>
  //   a.name > b.name ? -1 : 1,
  // );
  // console.log(strDescending);

  return (
    // <div>
    //   // {
    //     // student.map((employee) =>
    //   // {
    //   //   return (
    //   //     <div key={employee.id}>
    //   //       <p>Fname: {employee.firstName}</p>
    //   //       <p>Lname: {employee.lastName}</p>
    //   //       <p>Lname: {employee.checkbox ? <> True</> : <>False</>}</p>
    //   //       {c}
    //   //       <button onClick={()=> cc(c+1)} >Add</button>
    //   //       <button onClick={()=> cc(c-1)}  disabled={c<1}>Subtract</button>
    //   //       <hr />

    //   //     </div>
    //   //   );
    //   // })
    // // };
    // </div>

    <div>
      {data.map((a) => {
        return (
          <div key={a.id}>
            <h1>Details</h1>
            <p>
              <strong>Name :</strong>
              {a.name}
            </p>
            <p>
              <strong>Email :</strong>
              {a.email}
            </p>
            <p>
              <strong>Website :</strong>
              {a.website}
            </p>
            <p>
              <strong>Phone :</strong> {_.get(a, "address.city")}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Asp;
