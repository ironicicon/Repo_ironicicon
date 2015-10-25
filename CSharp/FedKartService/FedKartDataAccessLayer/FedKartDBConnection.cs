using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;
using System.Data.SqlClient;
using Microsoft.Win32.SafeHandles;
using System.Runtime.InteropServices;

namespace FedKartDataAccessLayer
{
    public class FedKartDBConnection:AbstractDisposable
    {
        private SqlConnection _connection = new SqlConnection();
        public SqlConnection returnConnection()
        {
            //string dbCon = ConfigurationManager.ConnectionStrings["FedKartDataConnection"].ToString();
            string dbCon = FedKartConstants.FedKartDataConnection;
            if (!string.IsNullOrEmpty(dbCon))
            {
                _connection.ConnectionString = dbCon;
                return _connection;
            }
            else
            {
                throw new SQLConnectionInvalidException(_connection);
            }
        }
    }
    internal class SQLConnectionInvalidException : Exception
    {
        internal SQLConnectionInvalidException(SqlConnection connection)
        {
            connection = null;
            throw new Exception("SQL Connection cannot be created");
        }
    }
}
