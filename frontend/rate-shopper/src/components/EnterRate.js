import React, {Component} from 'react';

class EnterRate extends Component {
    render() {
        return (
            <div>
               <h2 className="text-center">Find the Best Return for Your Investement!</h2>
                    <form className="container border border-primary p-5" onSubmit={this.props.onSubmit}>
                        Principle:<br/>
                        <input type="text"  name="amount" value={this.props.investment} onChange={this.props.onChange}/><br/>
                        Term: <br />
                        <input type="radio" name="term" value="one" onChange={this.props.onTermChange} /> One Year<br/>
                        <input type="radio" name="term" value="two" onChange={this.props.onTermChange} /> Two Year<br/>
                        <input type="radio" name="term" value="three" onChange={this.props.onTermChange} /> Three Year<br/>
                        <input type="radio" name="term" value="four" onChange={this.props.onTermChange} /> Four Year<br/>
                        <input type="radio" name="term" value="five" onChange={this.props.onTermChange} /> Five Year<br/>
                        <br/>
                        <input className="btn-danger" type="submit" value="Discover Your ROI"/>
                    </form>

            </div>
        );
    }
}

export default EnterRate;