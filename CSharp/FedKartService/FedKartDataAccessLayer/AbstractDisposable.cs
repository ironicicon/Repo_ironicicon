using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Win32.SafeHandles;

namespace FedKartDataAccessLayer
{
    public abstract class AbstractDisposable:IDisposable
    {
        protected virtual void Dispose(bool disposing)
        {
            SafeHandle handle = new SafeFileHandle(IntPtr.Zero, true);
            if (disposing)
            {
                handle.Dispose();
            }
        }
        public virtual void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
