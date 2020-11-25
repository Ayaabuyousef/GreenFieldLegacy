import React,{Component}from 'react'

export default class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <div className="filter-result">{this.props.count} cardlist</div>
                <div className="filter-sort">
                    Order{""}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="Lowest">Lowest</option>
                        <option value="Lowest">Highest</option>


                    </select>
                    </div>
                <div className="filter-size">
                    Filter{" "}
                <select  value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">expensive</option>
                    <option value="">medium</option>
                    <option value="">cheap</option>

                </select>
                </div>
            </div>
        )
    }
}