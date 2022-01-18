import React,{useState, useEffect} from "react";

//axios for xml request
import axios from "axios";
//xml file reader
import XMLParser from "react-xml-parser";

const Table = ({dish}) => {
  const [name, setName] = useState([]);
  const [attr, setAttr] = useState([]);

  useEffect(() => {
    axios
      .get(dish, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);
        setName(jsonDataFromXml.getElementsByTagName("property"));
        setAttr(jsonDataFromXml.getElementsByTagName("attr"));
      });
    console.log("attr", attr);
  }, []);

  return (
    // bootstrap table
    <div className="container p-5">
     
      <table >
      <h2>La'Mango Restaurant Menu: {name[0].value}</h2>
        <tbody>
          {attr.map((item, index) => {
            return (
              <tr style={{ backgroundColor: "#ff8000", marginBottom: "20px" }}>
                <th key={index} scope="row">
                  {item.value}
                </th>
                <td key={index}>{name[index].value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;