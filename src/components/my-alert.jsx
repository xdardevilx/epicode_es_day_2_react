import  Alert  from "react-bootstrap/Alert";

function MyAlert (){
    return(
        <Alert variant="success" className="text-center">
      <Alert.Heading>Compra i libri</Alert.Heading>
      <hr />
      <p className="mb-0">
      questo è un sottotitolo
      </p>
    </Alert>
    )
}

export default MyAlert