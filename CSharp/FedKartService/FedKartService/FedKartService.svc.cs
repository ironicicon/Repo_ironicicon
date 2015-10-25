using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using FedKartService.Models;
using FedKartDataAccessLayer;

namespace FedKartService
{
    public class FedKartService : IFedKartService
    {
        private bool _isUserValid = false;
        private FedKartCommand _dbcon;
        public string GetData()
        {
            return string.Format("Test response");
        }


        public bool isUserValid()
        {
            try
            {
                using (_dbcon = new FedKartCommand())
                {
                    Dictionary<string, object> UserParameters = new Dictionary<string, object>(){
                           {"@username","username"},{"@password","password"}
                    };
                    System.Data.SqlClient.SqlCommand _cmd = _dbcon.ReturnDBCommand("select count(*) from Login where username=@username and pass=@password", null, false);
                    if (UserParameters != null)
                    {
                        foreach (var param in UserParameters)
                        {
                            System.Data.SqlClient.SqlParameter _param = new System.Data.SqlClient.SqlParameter();
                            _param.ParameterName = param.Key;
                            _param.Value = param.Value;
                            _param.SqlDbType = System.Data.SqlDbType.VarChar;
                            _param.Direction = System.Data.ParameterDirection.Input;
                            _cmd.Parameters.Add(_param);
                        }
                    }
                    int value = _dbcon.ExecuteSelectDBCommand(_cmd);
                    if (value >= 1)
                    {
                        _isUserValid = true;
                    }
                    else
                    {
                        _isUserValid = false;
                    }
                    return _isUserValid;
                }
            }
            catch (Exception ex)
            {
                _isUserValid = false;
                return _isUserValid;
            }
        }
    }
}
