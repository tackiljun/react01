import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"


const useCustomLogin = (fn) => {

    const loginInfo = useSelector(state => state.login)

    const navigate = useNavigate()

    useEffect(() => {

        if(fn) {
            if(!loginInfo.email) {
                fn(navigate)
            }
            return
        }

        console.log("signed: " + loginInfo.email)
        
        if(!loginInfo.email) {
            navigate("/member/login")
        }

    }, [loginInfo.email])
    
    return {loginInfo}
    
}
 
export default useCustomLogin;