using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unicreditServicesApi.Models;

namespace unicreditServicesApi.Services.Interfaces
{
    public interface IBookService
    {
        List<Book> GetAllByCategoryId(int categoryId);
        Book CreateBook(Book book);

        Book UpdateBook(Book book);
        List<Book> SearchBook(string keyword);
    }
}
