import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionsReponse {
  transactions: Transaction[];
  balance: Balance;
}

class ListTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(): TransactionsReponse {
    const allTransactions = this.transactionsRepository.all();

    const balance = this.transactionsRepository.getBalance();

    const transactions = {
      transactions: allTransactions,
      balance,
    };

    return transactions;
  }
}

export default ListTransactionService;
