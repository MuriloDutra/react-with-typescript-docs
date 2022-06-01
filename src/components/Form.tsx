import React, { useState } from "react";

interface FormData {
  title: string;
  body: string;
}
const defaultFormData: FormData = {
  title: "",
  body: "",
};

export default function Form() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const { title, body } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.id,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(defaultFormData);
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <br />
        <input type="text" id="title" value={title} onChange={onChange} />

        <br />
        <br />

        <label htmlFor="body">Body</label>
        <br />
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <br />

        <button type="submit">Upload post</button>
      </form>
    </>
  );
}
