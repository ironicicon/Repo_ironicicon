using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FedKartDataAccessLayer
{
    public class FedKartCommand : AbstractDisposable
    {
        private SqlCommand _command;
        private FedKartDBConnection _connection = new FedKartDBConnection();
        public SqlCommand ReturnDBCommand(string Query, SqlConnection connection, bool isSP)
        {
            //if true - its a stored procedure else its a query             
            if (connection == null)
            {
                connection = _connection.returnConnection();
            }
            _command = new SqlCommand(Query, connection);
            if (isSP)
            {
                _command.CommandType = CommandType.StoredProcedure;
            }
            else
            {
                _command.CommandType = CommandType.Text;
            }
            if (!string.IsNullOrEmpty(Query))
            {
                _command.CommandText = Query;
            }
            return _command;
        }
        public int ExecuteSelectDBCommand(SqlCommand command)
        {
            int rowCount = 0;
            try
            {
                if (command != null)
                {
                    command.Connection.Open();
                    rowCount = command.ExecuteNonQuery();
                    command.Connection.Close();
                    return rowCount;
                }
                else
                {
                    throw new Exception("command is null");
                }
            }
            catch (Exception ex)
            {
                return -1;
            }
        }
    }
}
