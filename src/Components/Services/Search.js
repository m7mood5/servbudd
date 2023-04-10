import { Box,TextField } from "@mui/material";
import { useState } from "react";
import Card from "./Card";



export default function SearchS({ servicess }) {
    const [input, setInput] = useState("");

    const inputHandler = (e) => setInput(e.target.value)

    const returnItems = () => {
        if (input.length > 0) {
            return servicess.filter((item) => item.title.includes(input));
        }
        return servicess;
    };
    return (
        <Box >
            <section style={{
                padding: "3rem 0",
                backgroundColor: "#DBDBDB",
                position: "relative",
            }}>
                <div style={{
                    maxWidth: "50rem",
                    padding: "3rem 6rem",
                    margin: " 0 auto",
                    display: "flex",
                    borderRadius: "1rem",
                    textAlign: "center",
                    flexDirection: "column",
                }}>
                    <div style={
                        {
                            position: "relative",
                            backgroundColor: "#FFFFFF",
                            height: "3.5rem",
                            borderRadius: "2rem",
                            fontSize: "2rem",
                            fontWeight: "500",
                            padding: "0.2rem 0.5rem",
                        }}>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Search For What Would You Like To Do ?"
                            variant="standard"
                            color="success"
                            sx={{ width: "95%" }}
                            value={input}
                            onChange={inputHandler}
                        />
                    </div>
                </div>
            </section >
            <section style={{
                padding: "2rem 0",
                textAlign: "center"
            }}>
                <div style={{
                    position: "relative",
                    marginBottom: "4rem"
                }}>
                    <h4 style={{
                        fontWeight: "700",
                        fontSize: " 2.5rem",
                        lineHeight: 1,
                        textTransform: "capitalize",
                        marginBottom: " 2rem"
                    }}>Search Results</h4>
                    <div style={{
                        fontSize: "1.5rem",
                        fontWeight: "500",
                        color: "#152425",
                        marginBottom: " 2rem"

                    }}>
                        {servicess.length} Results
                    </div>
                    <Card servicess={returnItems()}/>
                </div>

            </section>

        </Box >

    )
}