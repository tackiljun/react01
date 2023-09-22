import { useParams } from "react-router-dom"
import ModifyComponent from "../../components/product/ModifyComponent"
import useCustomLogin from "../../hooks/useCustomLogin"
import useQueryObj from "../../hooks/useQueryObj"


////////////////////////////////////////////////////////////////////////////////
const ModifyPage = () => {

    const {loginInfo} = useCustomLogin( (nav) => {

        //console.log("function.....")
        nav('.../list')

    })

    const {queryObj, setSearch, moveRead, moveList, moveModify} = useQueryObj()

    // setSearch, moveRead, 안에 들어가?
    const {pno} = useParams()

////////////////////////////////////////////////////////////////////////////////
    return ( 

        <div>
            <div>
                PRODUCT MODIFY PAGE {pno}
            </div>

            <ModifyComponent 
            pno={pno} 
            moveList={moveList} 
            moveRead={moveRead}>
            </ModifyComponent>
        </div>

     );
     
}
 
export default ModifyPage;