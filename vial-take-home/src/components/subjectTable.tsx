import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { ISubjectTableProps } from "../types/ISubjectTableProps";
import "../styles/subjectTable.css"
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material"


export default function SubjectTable(props: ISubjectTableProps) {
    const { data } = props;
    const [selectFilter, setSelectFilter] = useState<string[]>([]);
    const [genderFilters, setGenderFilters] = useState<string[]>([]);
    const [statusFilters, setStatusFilters] = useState<string[]>([]);
    const [filteredData, setFilteredData] = useState<typeof data>([]);
    const [searchInput, setSearchInput] = useState("");

    // Populate static column headers and name according to the field
    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            flex: 1,
            headerAlign: "left",
            align: "left",
            headerClassName: "super-app-theme--header",
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerAlign: "left",
            align: "left"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "gender",
            headerName: "Gender",
            flex: 1,
            headerAlign: "left",
            align: "left"
        },
        {
            field: "diagnosisDate",
            headerName: "Diagnosis Date",
            flex: 1,
            headerAlign: "left",
            align: "left"
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            headerAlign: "left",
            align: "left"
        },
    ];

    // Static fields of filter labels
    const filters = [
        "Male",
        "Female",
        "Active",
        "Inactive",
    ];

    // Handles the filter event for the select filter component
    const handleFilter = (event: SelectChangeEvent<typeof selectFilter>) => {

        // Get "value" from the event"s target object to get the options selected
        const {
            target: { value },
        } = event;
        const selectedFilters = typeof value === "string" ? value.split(",") : value;
        setSelectFilter(selectedFilters);

        // Set new arrays of either gender or status filter
        const newGenderFilters = selectedFilters.filter(filter => filter === "Male" || filter === "Female");
        const newStatusFilters = selectedFilters.filter(filter => filter === "Active" || filter === "Inactive");

        setGenderFilters(newGenderFilters);
        setStatusFilters(newStatusFilters);
    };

    // Handle search function to filter by name
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);
    };


    // Whenever data is searched or filtered, update UI 
    useEffect(() => {
        // Apply filters to the data to update UI and return filtered data
        const applyFilters = () => {
            let filtered = data;

            if (genderFilters.length > 0) {
                filtered = filtered.filter(subject => genderFilters.includes(subject.gender));
            }
            if (statusFilters.length > 0) {
                filtered = filtered.filter(subject => statusFilters.includes(subject.status));
            }
            if (searchInput) {
                filtered = filtered.filter(subject =>
                    subject.name.toLowerCase().trim().includes(searchInput.toLowerCase())
                );
            }

            return filtered;
        };

        setFilteredData(applyFilters());
    }, [data, genderFilters, statusFilters, searchInput]);

    return (
        <div style={{ display: "Flex", justifyContent: "center", flexDirection: "column", paddingBottom: "5px" }}>
            <Box className="tableFilters">
                <TextField
                    label="Search By Name:"
                    variant="filled"
                    value={searchInput}
                    onChange={handleSearch}
                    className="searchInput"
                    InputLabelProps={{
                        style: { fontSize: 'small' } // Also sets the label font size to match
                    }}
                />
                <Box style={{ paddingBottom: "10px" }}>
                    <InputLabel style={{ padding: "5px" }}>Filter</InputLabel>
                    <Select
                        multiple
                        value={selectFilter}
                        placeholder="Select Filter:"
                        onChange={(selected) => handleFilter(selected)}
                        className="selectFilter"
                    >
                        {filters.map((filter) => (
                            <MenuItem value={filter}>{filter}</MenuItem>
                        ))}
                    </Select>
                </Box>
            </Box>
            <Box>
                <DataGrid
                    rows={filteredData.map(subject => ({
                        id: subject.id, name: subject.name, age: subject.age,
                        gender: subject.gender, diagnosisDate: subject.diagnosisDate.substring(0, 10), status: subject.status
                    }))}
                    columns={columns}
                    pageSizeOptions={[5, 10, data.length]}
                    disableRowSelectionOnClick
                    autoHeight
                    className="dataGrid"
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                />
            </Box>
        </div>
    );
}
