import {createContext} from "react"


const noop = () => {}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  logou: noop,
  isAuthenticated: false
})


export default AuthContext
