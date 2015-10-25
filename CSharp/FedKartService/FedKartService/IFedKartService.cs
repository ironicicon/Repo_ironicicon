using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using FedKartService.Models;

namespace FedKartService
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IFedKartService" in both code and config file together.
    [ServiceContract]
    public interface IFedKartService
    {

        [OperationContract]
        string GetData();

        [OperationContract]
        [WebInvoke(Method="GET",RequestFormat=WebMessageFormat.Json,UriTemplate="ValidateUser")]
        bool isUserValid();
    }
}
