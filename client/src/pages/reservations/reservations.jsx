import './reservations.css';
import React from "react"

import AppBarr from "../../components/AppBar/AppBar"
import CardComp from "../../components/cardComponents/card"
class Reservations extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reserveShow: true,
            favoriteEmp: true,
            result:[]
        }
    }
    componentDidMount=()=> {
       
            fetch("http://127.0.0.1:5000/user/getuser", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "displayName": this.props.currentUser }),
            })
                .then(data => data.json())
                .then(data =>this.setState({result: data.reservations}))
        }
    
    render() {
        const { dateDifferenceNumber, adults, currentUser, checkIn, checkOut, searchValue, cityAndCountry, handleSeachButtonClick, reservationArray } = this.props
        return (
            <div>
                <AppBarr currentUser={currentUser} />
                {
                    this.state.result.length ?
                    this.state.result.map((data, i) => {
                            console.log(data)
                            if (typeof data === "object" && data.name)
                                return <CardComp data={data} adults={adults} compDidmount={this.componentDidMount} reserveShow={this.state.reserveShow} favoriteEmp={this.state.favoriteEmp} adults={adults} dateDifferenceNumber={dateDifferenceNumber} currentUser={currentUser} reservationArray={reservationArray} />
                        })
                        :
                        <h2>
                           there are no items
                    </h2>
                }

            </div>
        );
    }
}
export default Reservations;
