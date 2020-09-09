using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unicreditServicesApi.Models;

namespace unicreditServicesApi.Services.Interfaces
{
    public interface ICategoryService
    {
        List<Category> GetAll();
        Category CreateCategory(Category category);
    }
}
