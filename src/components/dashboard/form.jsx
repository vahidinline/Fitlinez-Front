import React from "react";

const Form = (props) => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputPassword1">عنوان</label>
        <input
          name="title"
          onChange={props.handleChange}
          //value={input.title}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">توضیحات متا</label>
        <input
          name="description"
          onChange={props.handleChange}
          //value={input.description}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">تیتر اول</label>
        <input
          name="h1"
          onChange={props.handleChange}
          //value={input.h1}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">تیتر دوم</label>
        <input
          name="h2"
          onChange={props.handleChange}
          //value={input.h2}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">محتوای صفحه اول</label>
        <textarea
          name="body"
          onChange={props.handleChange}
          //value={input.body}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <select
          class="custom-select"
          id="category"
          onChange={props.handleChange}
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
          onClick={props.handleClick}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
