import React from "react";
import AppHeaderMember from "./component/AppHeaderMember.js";
import AppFooter from "./component/AppFooter.js";
import "./Financial.css";

import ExpenseItem from "./component/ExpenseItem.js";
import { useModel } from "../appModel/model.js";

function GetData(tablename){
    const { data } = useModel(tablename);
    return data;
}

function Financial() {
    const expenseItems = GetData("expenseItemsDB");
    const scholarships = GetData("scholarshipDB");
    const studentID = "6510740000";
    //expense-items
    let total = 0;
    let overdue = 0;
    const filteredExpenseItem = expenseItems.filter((expense) => {
        return expense.studentID.includes(studentID); //ใส่ id ของผู้ใช้
    });
    const expenseItemElement = filteredExpenseItem.map((expense, index) => {
        total = expense.amount.reduce((a, b) => a + b, 0);
        overdue = expense.overdue.reduce((a, b) => a + b, 0);
        return (
            <ExpenseItem key={index} expense={expense} />
        );
    });


    //scholarship
    const filteredScholarship = scholarships.filter((scholarship) => {
        return scholarship.studentID.includes(studentID);  //ใส่ id ของผู้ใช้
    });
    const scholarshipElement = filteredScholarship.map((scholarship, index) => {
        return (
            <tr>
                <td>{scholarship.semester}</td>
                <td>{scholarship.scholarship}</td>
                <td>{scholarship.amount}</td>
                <td>{scholarship.funder}</td>
            </tr>
        );
    });

    return (
        <div className="finance">
            <AppHeaderMember />
            <section>
                <div class="container">
                    <div class="finance-content">
                        <div class="finance-col-left">
                            <h2>เลือกวิธีการชำระเงิน</h2>
                            <div>
                                <button className="btn btn-success m-1">mBanking</button>
                                <button className="btn btn-success m-1">Creadit Card</button>
                                <button className="btn btn-success m-1">Bill</button>
                            </div>
                        </div>
                        <div class="finance-col-right">
                            <h2>ค่าใช้จ่าย</h2>
                            <table className="detail-expense-items">
                                <thead>
                                    <th>วันที่</th>
                                    <th>รายการ</th>
                                    <th>จำนวนเงิน</th>
                                    <th>ค้างชำระ</th>
                                </thead>
                                <tbody>
                                    {expenseItemElement}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className="total-amount" colSpan={2}>รวม</td>
                                        <td >{total}</td>
                                        <td >{overdue}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>

                    <div className="scholarship">
                        <h2>ทุนการศึกษา</h2>
                        <table className="detail-scholarship">
                            <thead>
                                <th>ภาคการศึกษา</th>
                                <th>ทุนการศึกษา</th>
                                <th>จำนวน</th>
                                <th>ผู้ให้ทุน</th>
                            </thead>
                            <tbody>
                                {scholarshipElement}
                            </tbody>
                        </table>

                    </div>
                </div>
            </section>
            <AppFooter />
        </div>
    );
};

export default Financial;