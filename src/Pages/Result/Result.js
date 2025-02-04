import { Button } from "@mui/material";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Result.css";

const Result = ({ name, score }) => {
    const history = useHistory();

    useEffect(() => {
        if (!name) {
            history.pushState("/");
        }


    }, [name, history]);

    return <div className="result">
        <span className="title">Final Score : {score}</span>
        <Button 
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "centre", marginTop: 20 }}
        href="/"
        >
            Go To Homepage
        </Button>


    </div>;
}

export default Result;