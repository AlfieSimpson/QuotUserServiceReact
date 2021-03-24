
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function UserList(props){

    const {users} = props;
    const classes = useStyles();

    function generateUserRowKey (user) {
        return user.id.userId+"."+user.id.clientId;
    }

    return (
        <div className="userListContainer">
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right"><b>User Id</b></TableCell>
                        <TableCell align="right"><b>Client Id</b></TableCell>
                        <TableCell align="right"><b>Name</b></TableCell>
                        <TableCell align="right"><b>Email</b></TableCell>
                        <TableCell align="right"><b>Role</b></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user) => (
                        <TableRow key={generateUserRowKey(user)}>
                        <TableCell component="th" scope="row" align="right">
                            {user.id.userId}
                        </TableCell>
                        <TableCell component="th" scope="row" align="right">
                            {user.id.clientId}
                        </TableCell>
                        <TableCell align="right">{user.metadata.name}</TableCell>
                        <TableCell align="right">{user.metadata.email}</TableCell>
                        <TableCell align="right">{user.metadata.role}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default UserList;