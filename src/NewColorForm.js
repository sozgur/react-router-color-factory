import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewColorForm.css";

const NewColorForm = ({ addColor }) => {
    const INITIAL_DATA = {
        name: "",
        hex: "",
    };

    const history = useHistory();
    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value);
        setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex });
        setFormData(INITIAL_DATA);
        history.push("/colors");
    };

    return (
        <div className="NewColorForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Color Name: </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="hex">Color Value: </label>
                    <input
                        id="hex"
                        type="color"
                        name="hex"
                        value={formData.hex}
                        onChange={handleChange}
                    />
                </div>
                <button> Add This Color</button>
            </form>
        </div>
    );
};

export default NewColorForm;
