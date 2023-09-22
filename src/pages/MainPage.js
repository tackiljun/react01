import BasicLayout from "../layouts/BasicLayout";


//////////////////////////////////////////////////////////////
const MainPage = () => {

    console.log("---------- MAIN ----------")

//////////////////////////////////////////////////////////////
    return ( 

        <BasicLayout>
            <h2 className="m-auto text-center">MAIN PAGE</h2>

            <div>
                <img 
                className="mx-auto" 
                src={require("../images/GlassMainimg.jpg")}/>
            </div>
        </BasicLayout>

     );
     
}
 
export default MainPage;