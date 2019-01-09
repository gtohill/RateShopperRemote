import React from 'react';

const BestRate = (props) =>{
    let roi = props.roi;
    return(
         <table className="table">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Invested</th>
                    <th>Term</th>
                    <th>Rate</th>
                    <th>Return</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{roi.company}</td>
                    <td>${roi.invested}</td>
                    <td>{roi.term}</td>
                    <td>{roi.rate}%</td>
                    <td><b>${roi.amount}</b></td>

                </tr>
            </tbody>
        </table>
        );
};
export default BestRate;


