import { useEffect, useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { ISubjectTableProps } from "../types/ISubjectTableProps";
import "./styles/subjectTable.css"
import { Box, InputLabel, OutlinedInput, MenuItem, Select, SelectChangeEvent, TextField} from '@mui/material'



export default function SubjectTable(props: ISubjectTableProps) {
    const { data } = props;
    // const [activePage, setActivePage] = useState<Boolean>();
    const [selectFilter, setSelectFilter] = useState<string[]>([]);
    const [genderFilters, setGenderFilters] = useState<string[]>([]);
    const [statusFilters, setStatusFilters] = useState<string[]>([]);
    const [diagnosisDateFilters, setDiagnosisDateFilters] = useState<string[]>([]);


    // Static Column GridCol header with styling according to field
    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'ID',
            flex: 1,
            headerAlign: 'left',
            align: 'left',
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'gender',
            headerName: 'Gender',
            flex: 1,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'diagnosisDate',
            headerName: 'Diagnosis Date',
            flex: 1,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'status',
            headerName: 'Status',
            flex: 1,
            headerAlign: 'left',
            align: 'left'
        },
    ];

    // Handling the filter Change
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectFilter(
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    // Populate rows by mapping subject data from data props
    const rows = data.map((subject) => (
        {
            id: subject.id, name: subject.name, age: subject.age,
            gender: subject.gender, diagnosisDate: subject.diagnosisDate.substring(0, 10), status: subject.status
        }
    ));

    const filters = [
        'Male',
        'Female',
        'Active',
        'Inactive',
    ];

    // useEffect(() => {
    //     setSortedData(handleData(data, genderFilters, statusFilters,);
    //   }, [data]);

    return (
        <div style={{ display: 'Flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div className="tableFilters">
                <TextField label="Search By Name" variant="filled" />
                <div>
                    <InputLabel id = "demo-multiple-filter-label">Filter</InputLabel>
                    <Select
                        labelId="demo-multiple-filter-label"
                        id="demo-multiple-filter"
                        multiple
                        value={selectFilter}
                        onChange={handleChange}
                        input={<OutlinedInput label="demo-multiple-filter-label" />}
                        MenuProps={MenuProps}
                    >
                        {filters.map((filter) => (
                            <MenuItem value={filter}>{filter}</MenuItem>
                        ))}
                    </Select>

                </div>
            </div>
            <Box> 
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5, 10, rows.length]}
                    disableRowSelectionOnClick
                    autoHeight
                />
            </Box>
        </div>
    );
}
