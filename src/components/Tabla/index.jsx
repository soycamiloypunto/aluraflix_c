import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TablaDataGrid = styled(DataGrid)`
    margin-top: 2rem;
    background: ${({ theme }) => theme.texto};
`;

export function Tabla({db, columnas, actualizar, eliminar}) {
    return (
        <TablaDataGrid
            rows={db}
            columns={[
                ...columnas,
                {
                    field: 'acciones',
                    headerName: 'Acciones',
                    maxWidth: 300,
                    sortable: false,
                    renderCell: (params) => {
                        const { id } = params.row
                        const onClick = (e) => {
                            e.stopPropagation();
                            eliminar(id)
                                .then(() => {
                                    actualizar();
                                });
                        };

                        return (
                            <>
                                <DeleteOutlineOutlinedIcon sx={{ color: 'red' }} onClick={onClick} />
                                <Link to={`${id}`} >
                                    <EditOutlinedIcon sx={{ color: 'green' }} />
                                </Link>
                            </>
                        );
                    }
                }
            ]}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[10, 20]}
        />
    );
}