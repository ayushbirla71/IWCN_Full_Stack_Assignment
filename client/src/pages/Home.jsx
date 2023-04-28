import React, { useEffect, useState } from "react";
import moment from "moment";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

const Home = () => {
  let [notes, setNotes] = useState([]);
  let [input, setInput] = useState("");

  async function submit() {
    let { data } = await axios.get("http://localhost:3001/getNotes");
    console.log(data.data);
    setNotes(data.data);
  }
  useEffect(() => {
    submit();
  }, []);

  let onchange = ({ target: { value, name } }) => {
    if (name === "notes") {
      setInput(value);
    }
  };

  let onSubmit = async () => {
    try {
      input = input.split(" ");
      if (input.length <= 1) {
        return alert("notes is minimum 2 word");
      } else {
        let title = input.slice(0, 1).join("");
        let Description = input.splice(1).join(" ");
        let data = await axios.post("http://localhost:3001/createNote", {
          description: Description,
          title: title,
          Date: moment().format("YYYY/MM/D")
        });
        submit();
        console.log(data);
      }
    } catch (error) {
      alert("title is alredy present")
    }
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deleteNote?id=${id}`);
      submit();
    } catch (error) {}
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          borderRadius: "10px",
          padding: "2%",
          marginTop: "3%",
          marginLeft: "20%",
          marginRight: "20%",
        }}
      >
        <textarea
          onChange={onchange}
          name="notes"
          style={{ minWidth: "80%", minHeight: "70px", padding: "1%", borderRadius:"20px", }}
          placeholder="write your note...."
        />
        <button
          style={{ maxHeight: "60px", margin: "2%", width: "10%" ,borderRadius:"20px", backgroundColor:"green"}}
          onClick={() => onSubmit()}
        >
          Add
        </button>
      </div>

      <div className="row">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {notes
            ? notes.map((item, key) => {
                return (
                  <div
                    style={{
                      width: "19%",
                      border: "solid",
                      borderRadius: "20px",
                      padding: "1%",
                      margin: "1%",
                    }}
                  >
                    <h5>{item?.title}</h5>
                    <p>{item?.description}</p>
                    <data>{item?.Date}</data>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        margin: "2%",
                      }}
                    >
                      <button
                        onClick={() => {
                          onDelete(item.id);
                        }}
                      >
                        <MdDeleteForever size={25} />
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Home;
