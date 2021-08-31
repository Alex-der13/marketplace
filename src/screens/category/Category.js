import React, { useState, useEffect } from 'react'
import { CircularProgress, Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import './Category.css'

const Category = ({ addBasket }) => {
  const [data, setData] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/${params.name}`)
      .then(response => response.json())
      .then(res => setData(res))
  }, [params])

  if (!data.length) {
    return <CircularProgress />
  }

  return (
    <div>
      {data.map((category) => (
        <div key={category.ItemId}>
          <div>{category.Name}</div>
          <div>{category.Price}</div>
          <img src={category.PictureUrl} alt="book" width="240" height="320" />
          <Button variant="contained" color="primary" onClick={() => addBasket(category)}>Купить</Button>
        </div>
      ))}
    </div>
  )
}

export default Category
