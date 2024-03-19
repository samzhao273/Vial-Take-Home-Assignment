
import { useEffect, useState } from "react";
import SubjectTable from "../components/subjectTable";
import Header from "../components/header";
import { Divider } from "@mui/material";
import Vial from "../assets/vial.svg";

export default function SubjectDataHome() {
    const [subjectsData, setSubjectsData] = useState([]);

    // Use Effect for updating UI when fetching data 
    useEffect(() => {
        const proxyUrl = 'https://corsproxy.io/?';
        const apiUrl = 'https://us-central1-vial-development.cloudfunctions.net/function-1/subjects';
        fetch(`${proxyUrl}${apiUrl}`)
            .then(response => response.json())
            .then(data => {
                setSubjectsData(data.data);
                console.log(data.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);


    return (
        <div style={{ margin: "24px 48px", alignContent: "center", justifyContent: "center" }}>
            <Divider style={{ paddingTop: "20px", fontSize: "20px" , paddingBottom: "20px"}}>
                <img src={Vial} style={{ width: 36, height: 36 }}></img>
            </Divider>
            <SubjectTable data={subjectsData} />
        </div>
    )
}
