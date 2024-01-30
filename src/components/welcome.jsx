import MyAlert from "./my-alert"
import { Component } from "react"
import AllTheBooks from "./all-the-books"





class Welcome extends Component{
    render()
    {
        return(
            <div>
            <MyAlert/>
            <AllTheBooks/>
            
        </div>
        )
    }
}

export default Welcome