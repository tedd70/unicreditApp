using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unicreditServicesApi.Models;
using unicreditServicesApi.Repositories;
using unicreditServicesApi.Services.Interfaces;

namespace unicreditServicesApi.Services
{
    public class BookService : IBookService
    {
        private readonly UnicreditDbContext _context;
        public BookService(UnicreditDbContext context)
        {
            _context = context;
        }

        public List<Book> GetAllByCategoryId(int categoryId)
        {
            return _context.Books.Where(x => x.CategoryId == categoryId).ToList();
        }

        public Book CreateBook(Book book)
        {
            _context.Books.Add(book);
            _context.SaveChanges();

            return book;
        }

        public Book UpdateBook(Book book)
        {
            _context.Books.Update(book);
            _context.SaveChanges();

            return book;
        }

        public List<Book> SearchBook(string keyword)
        {
            return _context.Books.Where(x => x.Name.Contains(keyword)).ToList();
        }
    }
}
