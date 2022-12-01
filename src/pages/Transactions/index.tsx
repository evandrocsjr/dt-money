import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighLight,
} from "./styles";
import { SearchForm } from "./components/SearchForm";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de sites</td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              <td>Venda</td>
              <td>13/04/2002</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              <td>Alimentação</td>
              <td>13/04/2002</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de sites</td>
              <PriceHighLight variant="outcome">- R$ 12.000,00</PriceHighLight>
              <td>Venda</td>
              <td>13/04/2002</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de sites</td>
              <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              <td>Venda</td>
              <td>13/04/2002</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
