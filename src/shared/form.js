import React, { useEffect, useState } from 'react'


const Form = ({ addUserList, update }) => {
  const initalFormState = { id: null, name: '', job: '', location: '' };
  const [form, setForm] = useState(initalFormState);

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setForm(
      { ...form, [name]: value }
    )
  }

  useEffect(() => {
    setForm(update);
  }, [update])
  console.log(form);

  const addForm = (e) => {
    e.preventDefault();
    addUserList(form)
    setForm(initalFormState)
  }

  console.log(form);
  return (
    <form>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={form.name}
        onChange={onChangeInput}
      />
      <label>Job</label>
      <input
        type='text'
        value={form.job}
        name='job'
        onChange={onChangeInput}
      />
      <label>Location</label>
      <input
        type='text'
        name='location'
        value={form.location}
        onChange={onChangeInput}
      />
      <button onClick={addForm}>Submit</button>
    </form>
  )
}

export default Form