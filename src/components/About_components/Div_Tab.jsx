import Single_Div from "./Single_Div";

function Div_Tab(){ 
    return(
        <div style={{display:'flex', justifyContent: 'space-around'}}>
        <Single_Div/>
        <Single_Div/>
        <Single_Div/>
        </div>
    );
}

export default Div_Tab;