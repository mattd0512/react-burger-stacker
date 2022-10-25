// this displays an individual ingredient
import React from "react"

// this component recieves ONE ingredient as a prop and dispkays said ingredient
const Ingredient = (props) => {
        const { name, color } = this.props.ingredient

    return (
        <p
            style={{backgroundColor: color}}
            id={this.props.itemKey}
            onClick={this.props.clickFunc}
        >
            {name}
        </p>
    )
}

export default Ingredient