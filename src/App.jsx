import { useState, useEffect } from "react"

function App() {

  const [ventas, setVentas] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [cambio, setCambio] = useState(0)
  const [showCambio, setShowCambio] = useState(false)

  const handleVentas = () => {
    if (ventas <= 0 && cambio == 10) {
      alert("no puedes bola e cacho")
    } else if (ventas <= 0 && cambio == 20 || valorTotal < 15 && cambio == 20) {
      alert("no puedes bola e cacho")
    }
    else {
      setVentas(ventas + 1)
      setValorTotal(valorTotal + 5)
      setShowCambio(true)
    }

  }

  useEffect(() => {
    console.log(cambio)

  }, [cambio])



  return (
    <div>
      <h1 className="text-center mt-4">BIENVENIDO A TU HELADERIA</h1>
      <div className="m-auto d-flex flex-column">
        <div className="mx-auto">
          <h4 className="text-center mb-5 mt-5">VALOR DEL HELADO P/P 5$</h4>
          <h4 id="ventas" className="text-center mb-5">VENTAS POR DIA: {ventas}</h4>
          <h4 id="cajaId" className="text-center mb-5">VALOR TOTAL EN CAJA: {valorTotal}</h4>
        </div>

        <form className="row g-3 mx-auto">
          <div className="col-auto">
            <input type="text" readOnly className="form-control-plaintext" id="staticEmail2" value="De cuanto es tu billete" />
          </div>

          <div className="col-auto">
            <select id="precio" onChange={(e) => setCambio(e.target.value)} className="form-select" aria-label="Default select example">
              <option selected value="0">Selecciona tu billete</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>

          <div className="col-auto">
            <button type="button" onClick={handleVentas} className="btn btn-success">Enviar</button>
          </div>
        </form>

        {showCambio ? <h3 id="respuesta" className="text-center fw-light mt-5"> TU CAMBIO ES DE: {cambio - 5} </h3> : null}

      </div>
    </div>
  )
}

export default App
