import './homePage.css';
import React from "react"
import { Link } from 'react-router-dom';
import MenuItems from "../../components/menuItem/menuItem"


class HomePage extends React.Component {
    constructor() {
      super()
      this.state = {
        initailItems: [{city:"singapore",size: 'large'}, {city:"kualalumpur",size: 'large'},{city:"losAngeles"},{ city:"rome"}, {city:"Barcelona"},{ city:'paris'}],
      }
    }
    render() {
      return (
          <div className='directory-menu' >{
        this.state.initailItems.map((item,id)=>(
         <MenuItems item={item} key={id} />
        )) 
     }
        </div>
      );
    }
  }
  
  export default HomePage;
