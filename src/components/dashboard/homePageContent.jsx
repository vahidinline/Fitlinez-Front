import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./form";

function CreateHome() {
  const [contents, setContents] = useState([
    {
      title: "",
      description: "",
      h1: "",
      h2: "",
      body: "",
      category: "",
    },
  ]);
  useEffect(() => {
    fetch("/List")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setContents(jsonRes));
  });
  const [input, setInput] = useState({
    title: "",
    description: "",
    h1: "",
    h2: "",
    body: "",
    categoy: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((preveInput) => {
      return {
        ...preveInput,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    event.preventDefault();

    const newPage = {
      title: input.title,
      description: input.description,
      h1: input.h1,
      h2: input.h2,
      body: input.body,
      category: input.categoy,
    };
    axios.post("http://localhost:3000/create", newPage);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <div className="form-group">
              <label for="exampleInputPassword1">عنوان</label>
              <input
                name="title"
                onChange={handleChange}
                value={input.title}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">توضیحات متا</label>
              <input
                name="description"
                onChange={handleChange}
                value={input.description}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">تیتر اول</label>
              <input
                name="h1"
                onChange={handleChange}
                value={input.h1}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">تیتر دوم</label>
              <input
                name="h2"
                onChange={handleChange}
                value={input.h2}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">محتوای صفحه اول</label>
              <textarea
                name="body"
                onChange={handleChange}
                value={input.body}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select
                class="custom-select"
                id="category"
                onChange={handleChange}
              >
                <option selected>انتخاب صفحه</option>
                <option value="1">صفحه اول</option>
                <option value="2">صفحه درباره ما</option>
                <option value="3">وبلاگ</option>
              </select>
            </div>
            <div className="form-group">
              {" "}
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col">
          <ul>
            {contents.map((content) => (
              <>
                <li>{content.title}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateHome;
