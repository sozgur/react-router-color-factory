import { Link, useParams, useHistory } from "react-router-dom";
import "./Color.css";

const Color = ({ colors }) => {
    const { color } = useParams();
    const history = useHistory();

    if (!colors[color]) {
        history.push("/colors");
    }

    const textHex = Math.random() * 255;

    return (
        <div
            className="Color"
            style={{
                backgroundColor: `${colors[color]}`,
                color: `rgb(${textHex},${textHex}, ${textHex} )`,
            }}
        >
            <h1> This is a {color} </h1>
            <h2> Isn't Beatiful? </h2>
            <Link to="/colors">GO BACK </Link>
        </div>
    );
};

export default Color;
