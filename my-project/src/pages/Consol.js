import React, {Component} from 'react'

class Consol extends Component{
    render(){
        return(
            <div className="Consolidação">
               <h2><center className="ConsolidaçãoTitle">Consolidação Contábil</center></h2>
                  <div class="row">
                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <p class="card-text" className="ConsolidaçãoText">A Consolidação de Demonstrações Contábeis (ou simplesmente Consolidação de Balanços) são as demonstrações financeiras combinadas de uma empresa e suas subsidiárias. Ela permite avaliar a saúde geral de um grupo inteiro de empresas ao invés de somente a posição de uma empresa.
                  De acordo com o Conselho Federal de Contabilidade, as demonstrações consolidadas resultam da agregação das demonstrações contábeis (estabelecidas pelas Normas Brasileiras de Contabilidade), de duas ou mais entidades, das quais uma tem o controle direto ou indireto sobre a(s) outra(s).
                  <br></br>
                  Font: Treasy
                  </p>
                  </div>
                  </div>
                  </div>

                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <img src="https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="ConsolidaçãoImg" />
                  </div>
                  </div>
                  </div>
                  </div>
            </div>
        )
    }
}

export default Consol;