import React, {useState, useEffect, useContext} from "react"
import {useHistory} from "react-router-dom"

import AuthContext from "../context/AuthContext"
import {useHttp} from "../hooks/http.hook"


const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [link, setLink] = useState(``)

  useEffect(() => {
    window.M.updateTextFields()

  }, [])

  const pressHandler = async (evt) => {
    if (evt.key === `Enter`) {
      try {
        const data = await request(`/api/link/generate`, `POST`, {from: link}, {
          Authorization: `Bearer ${auth.token}`
        })
        
        history.push(`/detail/${data.link._id}`)

      } catch (err) {
        
      }
    }
  }
  

  return (
    <div className="row">
      <div className="col s8 offset-s2" style={{paddingTop: `2rem`}}>
        <div className="input-field">
          <input
            placeholder="Вставьте ссылку"
            id="link"
            type="text"
            name="email"
            value={link}
            onChange={(evt) => setLink(evt.target.value)}
            onKeyPress={pressHandler}
          />
          <label className="auth__label" htmlFor="link">Введите ссылку</label>
        </div>
      </div>
    </div>
  )
}


export default CreatePage