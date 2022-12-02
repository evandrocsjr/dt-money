import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighLight,
} from "./styles";
import { SearchForm } from "./components/SearchForm";
import { useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    const request = await fetch("http://localhost:3000/transactions");
    const data = await request.json();

    setTransactions(data);
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <PriceHighLight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHighLight>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
