import {useState} from 'react'

const NewBoxFrom = ({addBox}) => {
  const INITIAL_STATE = {width: '', height: '', backgroundColor: ''}

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const{ name, value } = e.target;
    setFormData( formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData)
    setFormData(INITIAL_STATE)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width:</label>
      <input 
        id='width'
        type="text" 
        name='width' 
        placeholder='width'
        value={formData.width} 
        onChange={handleChange}
      />

      <label htmlFor="height">height:</label>
      <input 
        id='height'
        type="text" 
        name='height' 
        placeholder='height'
        value={formData.height} 
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">backgroundColor:</label>
      <input 
        id='backgroundColor'
        type="text" 
        name='backgroundColor' 
        placeholder='backgroundColor'
        value={formData.backgroundColor} 
        onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  )
}

export default NewBoxFrom;