import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'
import { Container } from "./styles";

export function Summary(){
  return(
    <Container>
      <div>
        <header>
            <p>Entradas</p>
            <img src={incomeimg} alt = "Entradas" />
        </header>  
        <strong>R$ 1.000,00</strong>    
      </div>
      <div>
        <header>
            <p>Saidas</p>
            <img src={outcomeimg} alt = "Entradas" />
        </header>  
        <strong>R$ 500,00</strong>    
      </div>
      <div className="highlight-background">
        <header>
            <p>Total</p>
            <img src={totalimg} alt = "Total" />
        </header>  
        <strong>R$ 5.000,00</strong>    
      </div>   
    </Container>
  );
}