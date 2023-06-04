import "./search-panel.css"
import {Component} from "react";

class SearchPanel extends Component{
    constructor(props) {
        super(props);
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <input type="text"
                   value={this.props.term}
                   onChange={this.onUpdateSearch}
                   className="form-control search-input"
                   placeholder="Найти сотрудника"
            />
        )
    }
}

export default SearchPanel
