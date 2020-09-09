using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unicreditServicesApi.Models;
using unicreditServicesApi.Repositories;
using unicreditServicesApi.Services.Interfaces;

namespace unicreditServicesApi.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly UnicreditDbContext _context;
        public CategoryService(UnicreditDbContext context)
        {
            _context = context;
        }

        public List<Category> GetAll()
        {
            return _context.Categories.ToList();
        }

        public Category CreateCategory(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();

            return category;
        }
    }
}
