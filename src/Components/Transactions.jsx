import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Transactions() {

    const [filter, setFilter] = useState("all")
    const [sort, setSort] = useState("latest")

    const transactions = [
        { status: "SUCCESS", amount: "$3,500", customer: "Tech Solutions", email: "Techsol@example.com", accNum: "4829163574", type: "Receive", method: "Bank Transfer", date: "01 Sep 2024", error: "--" },
        { status: "SUCCESS", amount: "$56", customer: "Medico Mart", email: "Medicomart@example.com", accNum: "3291750462", type: "Send", method: "Credit Card", date: "22 Aug 2024", error: "--" },
        { status: "SUCCESS", amount: "$9.99", customer: "Netflix", email: "Netflix@example.com", accNum: "7549326810", type: "Send", method: "Bank Transfer", date: "17 Aug 2024", error: "--" },
        { status: "SUCCESS", amount: "$499.99", customer: "Globex Corporation", email: "sirbigjoe@example.com", accNum: "2175648390", type: "Receive", method: "Bank Transfer", date: "16 Dec 2023", error: "--" },
        { status: "SUCCESS", amount: "$79.99", customer: "Globex Corporation", email: "sirbigjoe@example.com", accNum: "2175648390", type: "Receive", method: "Bank Transfer", date: "14 Dec 2023", error: "--" },
        { status: "SUCCESS", amount: "$478.00", customer: "Levene Corp.", email: "shelley@example.com", accNum: "3951287604", type: "Send", method: "Credit Card", date: "19 Nov 2023", error: "--" },
        { status: "FAILURE", amount: "$478.00", customer: "Levene Corp.", email: "shelley@example.com", accNum: "3951287604", type: "Send", method: "Credit Card", date: "14 Nov 2023", error: "Network Problem" },
        { status: "FAILURE", amount: "$478.00", customer: "Levene Corp.", email: "shelley@example.com", accNum: "3951287604", type: "Send", method: "Credit Card", date: "12 Nov 2023", error: "Insufficient funds" },
        { status: "FAILURE", amount: "$478.00", customer: "Levene Corp.", email: "shelley@example.com", accNum: "3951287604", type: "Send", method: "Credit Card", date: "11 Nov 2023", error: "Server Down" },
        { status: "SUCCESS", amount: "$200.00", customer: "Jane Smith", email: "janesmith@example.com", accNum: "4860219573", type: "Receive", method: "Bank Transfer", date: "05 Oct 2023", error: "--" },
    ];



    const filteredTransactions = transactions.filter(tx => {
        if (filter === 'all') return true;
        if (filter === 'send') return tx.type === 'Send';
        if (filter === 'receive') return tx.type === 'Receive';
        if (filter === 'fail') return tx.status === 'FAILURE';
        return true;
    });

    const sortedTransactions = filteredTransactions.sort((a, b) => {
        if (sort === 'latest') return new Date(b.date) - new Date(a.date);
        if (sort === 'old') return new Date(a.date) - new Date(b.date);
        return 0;
    });

    const getStatusClass = (status) => {
        return status === "SUCCESS" ? "text-white btn btn-success" : "text-white btn btn-danger";
    };


    return (
        <div>

            <section className='top-tab'>
                <div className="text-end text-md-center pt-3">
                    <h1 className='display-5 fw-normal mx-4'>Transactions</h1>
                </div>

                <div className='d-inline-block mx-4 fw-semibold'>{transactions.length} Transactions</div>

                <div className="my-2 d-inline-block">
                    <select onChange={(e) => setFilter(e.target.value)} value={filter} id="" className='d-inline-block py-1 px-2 rounded rounded-1'>
                        <option value="all">All Transactions</option>
                        <option value="send">Send Transactions</option>
                        <option value="receive">Receive Transactions</option>
                        <option value="fail">Failed Transactions</option>
                    </select>

                    <div className='mx-4 d-none d-md-inline-block'>
                        <i class="fa-solid fa-sliders fs-4"></i>
                        <span className='mx-2 fs-6 position-relative' style={{ "bottom": "4px" }}>Filter List</span>
                    </div>
                </div>

                <div className='d-inline-block mx-4 my-2 float-sm-end'>

                    <select id="" onChange={(e) => setSort(e.target.value)} value={sort} className='d-inline-block py-1 px-2 rounded rounded-1'>
                        <option value="latest">Date Latest</option>
                        <option value="old">Date Oldest</option>
                    </select>

                    <div className='mx-4 d-none d-md-inline-block'>
                        <i class="fa-solid fa-arrow-up-short-wide fs-4"></i>
                        <span className='mx-2 fs-6 position-relative' style={{ "bottom": "4px" }}>Sort</span>
                    </div>

                </div>
            </section>

            <div className="m-4">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/">Home</Link></li>
                        <li class="breadcrumb-item"><Link className='text-decoration-none' style={{ "color": "#427bc7" }} to="/onlinebanking">Online Banking</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">Transactions</li>
                    </ol>
                </nav>
            </div>

            <section className='mt-5'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Transaction</th>
                            <th>Customer Info</th>
                            <th>Payment Method</th>
                            <th>Type</th>
                            <th>Created On</th>
                            <th>Error</th>
                        </tr>
                    </thead>
                    <tbody className='table-cols'>
                        {sortedTransactions.map((tx) => (
                            <tr>
                                <td>
                                    <span className={`badge ${getStatusClass(tx.status)}`}> {tx.status}</span> <br />
                                    <br />
                                    <h6 className='mx-1 d-inline-block fw-bold' style={{ "fontSize": "18px" }}>{tx.amount}</h6>
                                </td>
                                <td>
                                    <strong>{tx.customer}</strong> <br />
                                    <span>{tx.email}</span>
                                    <br />
                                    {tx.accNum}
                                </td>
                                <td>{tx.method}</td>
                                <td>{tx.type}</td>
                                <td>{tx.date}</td>
                                <td>{tx.error}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

        </div>
    )
}
