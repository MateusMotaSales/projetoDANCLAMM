import React, {Component} from 'react'

class Contabilidade extends Component{
    render(){
        return(
            <div className="Contabilidade">
                <h2><center className="ContabilidadeTitle">Contabilidade Societária</center></h2>
                  <div class="row">
                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <p class="card-text" className="ContabilidadeText">A contabilidade societária avalia as leis relativas à constituição das sociedades, empresas que devem ser registradas diretamente na Junta Comercial ou cujas pessoas jurídicas devem fazer o registro civil.
                  Essa designação surgiu somente em 2007 com a Lei n. 11.638, que aborda os aspectos contábeis societários. Esse preceito substituiu a antiga Lei das Sociedades por Ações (nº 6404/76) e trouxe conceitos diferentes a respeito dos registros contábeis.
                  O objetivo foi apresentar de forma clara e idônea a situação financeira e econômica da empresa no Balanço Patrimonial (BP) e na Demonstração do Resultado do Exercício (DRE).
                  <br></br>
                  Font: BLB Brasil
                  </p>
                  </div>
                  </div>
                  </div>

                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <img src="https://images.pexels.com/photos/3740400/pexels-photo-3740400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="ContabilidadeImg" />
                  </div>
                  </div>
                  </div>
                  </div>
            </div>
        )
    }
}

export default Contabilidade;