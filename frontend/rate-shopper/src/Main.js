import React from 'react';
import EnterRate from './components/EnterRate';
import BestRate from './components/BestRate';
require('./css/styles.css');


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rates: [],
            investment: 0,
            term: '',
            bestOption: [],
            flag: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    componentWillMount() {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    rates: json
                });
        })
    }

    handleSubmit(e){
         e.preventDefault();
        /*forumula A=P(1+(r/t))^nt*/
        const hashtable = {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5};
        const term = this.state.term;
        const n = hashtable[term];
        const t = 12;
        const P = this.state.investment;

        const list = [];

        this.state.rates.forEach(function (element) {
            let r = element[term];
            let A = P*Math.pow((1+(r/t)),(n*t));
            list.push({'company': element.company, 'rate': r ,'invested': P, 'term': term, 'amount': Math.round(A) });
            });

        let best = list[0];
        for(let i = 0; i < list.length; i++){
            let temp = list[i];
            if(best.amount > temp.amount){

            }
            else{
                best = temp;
            }
        }
        this.setState({
            bestOption: best,
            flag: true
        })
    }

    handleChange(e){
        console.log(e.target.value);
        let amount = e.target.value;
        this.setState({
            investment: amount
        })
    }

    handleTermChange(e){
        console.log(e.target.value);
        let term = e.target.value;
        this.setState({
            term: term
        })
    }


    render(){

        const {rates} = this.state;
        const {bestOption} = this.state;
        const {flag} = this.state;
        const results =  (flag ?
            <BestRate
                roi={bestOption}
            />:
            <p></p>);

        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                    <EnterRate
                        amount={this.props.investement}
                        onSubmit={this.handleSubmit}
                        onChange={this.handleChange}
                        onTermChange = {this.handleTermChange}

                    />
                    <div>
                        {results}
                    </div>
                    </div>
                    <div className="col-sm-1"></div>
                <div className="col-sm-7">
                     <table id="customers">
                    <thead>
                      <tr>
                        <th>Company</th>
                        <th>One Year</th>
                        <th>Two Year</th>
                        <th>Three Year</th>
                        <th>Four Year</th>
                        <th>Five Year</th>
                      </tr>
                    </thead>
                    <tbody>
                    {rates.map(rate => (
                        <tr key={rate.id}>
                            <td>{rate.company}</td>
                            <td>{rate.one}</td>
                            <td>{rate.two}</td>
                            <td>{rate.three}</td>
                            <td>{rate.four}</td>
                            <td>{rate.five}</td>
                        </tr>
                        )
                    )}
                    </tbody>
                </table>
                </div>

                </div>
            </div>
        )
    }
}

export default Main;