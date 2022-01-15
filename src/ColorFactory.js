import "./ColorFactory.css";
import { Link } from "react-router-dom";

const ColorFactory = ({ colors }) => {
    return (
        <div>
            <div className="ColorFactory-header">
                <h3>Welcome to the color factory</h3>
                <Link to="/colors/new"> Add a color </Link>
            </div>
            <div className="ColorFactory-list">
                Please select a color{" "}
                {Object.keys(colors).map((colorName) => (
                    <li key={colorName}>
                        <Link to={`/colors/${colorName}`}>{colorName}</Link>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default ColorFactory;
