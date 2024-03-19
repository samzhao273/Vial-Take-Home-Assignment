
import { useEffect, useState } from "react";
import SubjectTable from "../components/subjectTable";

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
        <div style={{ margin: "24px 48px", alignContent: "center" }}>
            <SubjectTable data = {subjectsData}/>
        </div>
    )
}
