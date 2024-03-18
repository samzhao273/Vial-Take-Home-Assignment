
import { useEffect, useState } from "react";
import { fetchSubjectsData } from "../functions/fetchSubjects";


 export default function SubjectDataHome() {
    const [subjectsData, setSubjectsData] = useState([]);
    // const [isLoading, setIsLoading] = useState<boolean>();

    // Use Effect for updating UI when fetching data 
    useEffect(() => {
        const loadSubjects = async () => {
          try {
            const fetchedSubjects = await fetchSubjectsData();
            setSubjectsData(fetchedSubjects);
          } catch (error) {
            console.error("Error loading subjects:", error);
          }
        };
        loadSubjects();
      }, []);
    


    // Returning the subject data to check if fetch hworks
    return (
        <div>{subjectsData}</div>
    )
}
