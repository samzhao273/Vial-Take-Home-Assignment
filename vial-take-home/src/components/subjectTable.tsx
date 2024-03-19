import { Table } from "@mantine/core";
import { ISubjectTableProps } from "../types/ISubjectTableProps";

export default function SubjectTable(props: ISubjectTableProps) {
    const { data } = props;
    const rows = data.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.id}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.age}</Table.Td>
            <Table.Td>{element.gender}</Table.Td>
            <Table.Td>{element.diagnosisDate}</Table.Td>
            <Table.Td>{element.status}</Table.Td>
        </Table.Tr>
    ));

    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Id</Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>Age</Table.Th>
                    <Table.Th>Gender</Table.Th>
                    <Table.Th>Diagnosis Date</Table.Th>
                    <Table.Th>Status</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}