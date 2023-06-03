import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css"

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {name: "John S.", salary: 850, increase: false,  rise: false, id: 1},
                {name: "Vasya P.", salary: 2500, increase: false, rise: false, id: 2},
                {name: "Mamed R.", salary: 4800, increase: false,  rise: false, id: 3},
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onAddEmployee = (name, salary) => {
         const newUser = [
             {
                 name,
                 salary,
                 id: this.maxId
             }
         ]
        this.setState(({data}) => ({
            data: [...data, ...newUser]
        }))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    render() {
        const {data} = this.state
        const increased = data.filter(item => item.increase).length
        return (
            <div className="app" >
                <AppInfo increased={increased} employees={data.length} />

                <div className="search-panel" >
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList onToggleProp={this.onToggleProp}
                               onDelete={this.deleteItem}
                               data={data} />
                <EmployeesAddForm onAdd={this.onAddEmployee} />
            </div>
        )
    }

}

export default App
