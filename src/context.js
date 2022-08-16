import React, { Component, createContext } from "react";
import items from './data'

const DestinationContext = createContext();

class DestinationProvider extends Component{
    state = {
        destinations: [],
        sortedDestinations: [],
        topDestinations: [],
        type: 'all',
        daystovisit: 0,
        ratings: 0,
        maxDaystovisit: 0,
        minDaystovisit: 0
    };

    //get data 
    componentDidMount() {
        let destinations = this.formatData(items);
        let topDestinations = destinations.filter(destination => destination.topdestination === true)
        let maxDaystovisit = Math.max(...destinations.map(item => item.daystovisit));
        let minDaystovisit = Math.min(...destinations.map(item => item.daystovisit));
        this.setState({
            destinations,
            topDestinations,
            sortedDestinations: destinations,
            daystovisit: maxDaystovisit,
            maxDaystovisit,
            minDaystovisit
        })
    }
     
    formatData(items){
        let tempItems = items.map(items =>{
            let image = items.images.map(image => image.url)
            let destination = {...items,image}
            return destination;
        });
        return tempItems
    }

    getDestination = (id) => {
        let tempDestinations = [...this.state.destinations]
        const destination = tempDestinations.find((destination) => destination.id === id)
        return destination;
    };

    handleChange = event => {
        const target = event.target

        const value = event.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name;
        console.log(target,value,name)
        this.setState({
            [name]: value
        }, this.filterDestinations);

    }

    filterDestinations = () => {
        let {
            destinations, type, daystovisit, ratings
        } = this.state
        let tempDestinations = [...destinations];

        //filter by type
        if(type !== "all"){
            tempDestinations = tempDestinations.filter(destination => destination.type === type);
        }
       // filter by daysto visit
       tempDestinations = tempDestinations.filter(destination => destination.daystovisit <= daystovisit);

       // filter by top rated
        if(ratings){
            tempDestinations = tempDestinations.filter(destination => destination.ratings === 5);
        }
        this.setState({
            sortedDestinations: tempDestinations
        })
    }

    render(){
        return(
            <DestinationContext.Provider value={{...this.state, getDestination: this.getDestination, handleChange: this.handleChange}}>
                {this.props.children}
            </DestinationContext.Provider>
        )
    }
}

const DestinationConsumer = DestinationContext.Consumer;

//higher order components.
export function withDestinationConsumer(Component){
    return function ConsumerWrapper(props){
        return <DestinationConsumer>
            {value => <Component {...props} context={value}/>}
        </DestinationConsumer>
    }
}

export {DestinationProvider,DestinationContext,DestinationConsumer}