import React from "react";

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numbers: [1,2,3]
        }
        this.addNumber = this.addNumber.bind(this)
    }

    addNumber () {
        const randNumber = Math.round(Math.random() * 10)
        this.setState({
            numbers: [...this.state.numbers, randNumber]
        })
      }


    componentDidMount() {
        console.log('don')
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state) {
            console.log('ne ravni', this.state)
        }
    }

    componentWillUnmount() {
        console.log('delete')
    }

      render () {
        return (
            <div>
              <ul>
                {this.state.numbers.map(number => 
                <li
                  key={number}>
                  {number}
                </li>)}
              </ul>
              <button onClick={this.addNumber}>New number</button>
            </div>
          );
      }
}

export default List