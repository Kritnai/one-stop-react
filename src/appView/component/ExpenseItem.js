
function ExpenseItem(props) {
    const { expense } = props;
    return (
        <>
            <tr>
                <td>{expense.date}</td>
                <td>{expense.order[0]}</td>
                <td>{expense.amount[0]}</td>
                <td>{expense.overdue[0]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[1]}</td>
                <td>{expense.amount[1]}</td>
                <td>{expense.overdue[1]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[2]}</td>
                <td>{expense.amount[2]}</td>
                <td>{expense.overdue[2]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[3]}</td>
                <td>{expense.amount[3]}</td>
                <td>{expense.overdue[3]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[4]}</td>
                <td>{expense.amount[4]}</td>
                <td>{expense.overdue[4]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[5]}</td>
                <td>{expense.amount[5]}</td>
                <td>{expense.overdue[5]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[6]}</td>
                <td>{expense.amount[6]}</td>
                <td>{expense.overdue[6]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[7]}</td>
                <td>{expense.amount[7]}</td>
                <td>{expense.overdue[7]}</td>
            </tr>
            <tr>
                <td></td>
                <td>{expense.order[8]}</td>
                <td>{expense.amount[8]}</td>
                <td>{expense.overdue[8]}</td>
            </tr></>

    );
}

export default ExpenseItem;