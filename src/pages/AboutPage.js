import BasicLayout from "../layouts/BasicLayout";


const AboutPage = () => {

    //console.log("--------------- ABOUT ---------------")
    const {loginInfo} = useCustomLogin()

    return ( 

        <BasicLayout>
            <h2>ABOUT PAGE</h2>
        </BasicLayout>

     );
}
 
export default AboutPage;