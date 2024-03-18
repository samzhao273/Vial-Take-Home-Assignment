// Api to fetch data
export async function fetchSubjectsData() {
    try {

        const proxyUrl = 'https://corsproxy.io/?';
        const apiUrl = 'https://us-central1-vial-development.cloudfunctions.net/function-1/subjects';
        const response = await fetch(
            `${proxyUrl}${apiUrl}`
        );
        const data = await response.json();
        console.log(data.data);
        return data.data;
    } catch (error) {
        console.error("Error fetching subject data", error);
        throw error;
    }
}

