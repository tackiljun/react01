import { useParams } from "react-router-dom"
import useQueryObj from "../../hooks/useQueryObj"
import ReadComponent from "../../components/board/ReadComponent"

const ReadPage = () => {

    const {queryObj, moveList} = useQueryObj()
    
    const {bno} = useParams()

    console.log(bno)
    console.log(useQueryObj)
    console.log("------------------------")

    return ( 

        <div>
            <div className="m-auto text-center">
                BOARD READ PAGE
                <div>
                    <ReadComponent bno={bno}></ReadComponent>
                </div>
            </div>
                
            <ReplyWrapper bno={bno}></ReplyWrapper>

            <button onClick={moveList}>
                LIST
            </button>
        </div>

     );
}
 
export default ReadPage;