import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ISubjectTableProps } from "../types/ISubjectTableProps";


export default function SubjectTable(props: ISubjectTableProps) {
    const { data } = props;

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 110,
        },
        {
            field: 'diagnosisDate',
            headerName: 'Diagnosis Date',
            width: 110,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 110,
        },
    ];
    
    const rows = data.map((subject) => (
        {id: subject.id, name: subject.name, age: subject.age, 
            gender: subject.gender, diagnosisDate: subject.diagnosisDate, status: subject.status}
    ));

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
