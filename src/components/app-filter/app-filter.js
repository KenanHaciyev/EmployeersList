import "./app-filter.css"

const AppFilter = ({filter, onFilterSelect}) => {
    const buttonsData = [
        {label: "Все сотрудники", name: "all"},
        {label: "На повышение", name: "rise"},
        {label: "Больше 1000$", name: "moreThan1000"},
    ]

    const button = buttonsData.map(item => {
        const active = item.name===filter
        const clazz = active ? "btn-light" : "btn-outline-light"
        return <button
            type="button"
            className={`btn ${clazz}`}
            key={item.name}
            onClick={() => onFilterSelect(item.name)}>
            {item.label}
        </button>
    })

    return (
        <div className="btn-group" >
            {button}
        </div>

    )
}

export default AppFilter
