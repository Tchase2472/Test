import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NewRecipe = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("")

    const stripHtmlEntities = (str) => {
        return String(str)
          .replace(/\n/g, "<br> <br>")
          .replace(/>/g, "&lt;")
          .replace(/>/g, "&gt;");
    };
};

const onChange = (event, setFunction) => {
    setFunction(event.target.value);
};



export default NewRecipe;