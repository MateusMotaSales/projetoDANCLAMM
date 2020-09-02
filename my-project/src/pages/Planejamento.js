import React, {Component} from 'react'
import {Card} from 'react-bootstrap'

class Planejamento extends Component{
    render(){
        return(
                
                <div className="PlanjamentoCard">
                    <h2><center className="PlanejamentoTitle">Planejamento Tributário</center></h2>
                  <div class="row">
                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <p class="card-text" className="ContabilidadeText">Brasil possui uma das maiores cargas tributárias do planeta, tendo arrecadado, segundo noticiado no Instituto Brasileiro de Planejamento e Tributação – IBPT, o total de 1 trilhão em impostos até o mês maio de 2019. Isso tudo correspondente a impostos, taxas, multas e contribuições nos níveis estadual, municipal e federal. Dentre os principais produtos com maior taxação estão vodka (82%), cigarro (80%), videogames (72%), perfumes (69%) e outros. A carga tributária é alta e muito visível no setor do consumo, onde aproximadamente 33% do que é pago pelo consumidor é revertido em imposto, mas não atinge somente esse setor e são questões como essa que chamam a atenção de empresários e estudiosos do ramo.
                  <br></br>
                  Font: Interi Jr
                  </p>
                  </div>
                  </div>
                  </div>

                  <div class="col-sm-6">
                  <div class="card">
                  <div class="card-body">
                  <img src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="PlanjamentoImg" />
                  </div>
                  </div>
                  </div>
                  </div>
                 </div>
        )
    }
}

export default Planejamento;