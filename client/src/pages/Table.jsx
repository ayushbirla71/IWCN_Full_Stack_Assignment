import React, { useState } from "react";
import "./table.css";
// import axios from "axios";

const Table = () => {
  const [data, setData] = useState([
    {
      id: 1,
      rowbox2: "Onboarding Call",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 2,
      rowbox2: "Google Search Console Access",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 3,
      rowbox2: "Google Analytics Access",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 4,
      rowbox2: "Website Access",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 5,
      rowbox2: "Technical Audit",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 6,
      rowbox2: "Anchor Text and Semantic Analysis",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 7,
      rowbox2: "Competitor Analysis",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 8,
      rowbox2: "Anchor Text/ URL Mapping",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 9,
      rowbox2: "Google Data Studio Report + Local Reporting Suite",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 10,
      rowbox2: "Site Level Optimization",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 11,
      rowbox2: "On Page Optimization",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 12,
      rowbox2: "Content Creation",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 13,
      rowbox2: "Content Publishing",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 14,
      rowbox2: "Premium Niche Placements",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 15,
      rowbox2: "Authority Niche Placements",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 16,
      rowbox2: "Review Mangement",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 17,
      rowbox2: "index Links",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
    {
      id: 18,
      rowbox2: "Video Recap",
      rowbox3: "",
      rowbox4: "",
      rowbox5: "",
      rowbox6: "",
      rowbox7: "",
      rowbox8: "",
    },
  ]);

  async function storeDataINDb(id, field, value) {
    try {

      // let data = {
      //     id :id,
      //     field : field,
      //     value:value
      // }
      // let responce = await axios.post("", data)
      // console.log(responce.data);

      
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(id, field, value) {
    const newData = data.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    storeDataINDb(id, field, value);
    setData(newData);
  }

  return (
    <table>
      <tr>
        <th>MONTH1</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
      {data.map((row) => (
        <tr key={row.id}>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox2", e.target.innerText)}
          >
            {row.rowbox2}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox3", e.target.innerText)}
          >
            {row.rowbox3}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox4", e.target.innerText)}
          >
            {row.rowbox4}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox5", e.target.innerText)}
          >
            {row.rowbox5}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox6", e.target.innerText)}
          >
            {row.rowbox6}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox7", e.target.innerText)}
          >
            {row.rowbox7}
          </td>
          <td
            contentEditable
            onBlur={(e) => handleEdit(row.id, "rowbox8", e.target.innerText)}
          >
            {row.rowbox8}
          </td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
