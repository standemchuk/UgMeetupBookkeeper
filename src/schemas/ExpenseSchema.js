export const ExpenseSchema = {
    name: 'Expense',
    primaryKey: 'id',
    properties: {
        id: 'string',
        amount: 'double',
        date: 'date',
        expenseCategory: 'string?'
    }
};