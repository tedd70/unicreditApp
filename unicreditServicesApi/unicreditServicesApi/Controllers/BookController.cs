using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using unicreditServicesApi.Models;
using unicreditServicesApi.Services.Interfaces;

namespace unicreditServicesApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        private IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        [HttpGet]
        [Route("search")]
        public IActionResult SearchBooks(string keyword)
        {
            return Ok(_bookService.SearchBook(keyword));
        }

        [HttpGet]
        public IActionResult GetAllByCategoryId(int categoryId)
        {
            return Ok(_bookService.GetAllByCategoryId(categoryId));
        }

        [HttpPost]
        public IActionResult CreateBook(Book book)
        {
            return Ok(_bookService.CreateBook(book));
        }

        [HttpPut]
        public IActionResult UpdateBook(Book book)
        {
            return Ok(_bookService.UpdateBook(book));
        }
    }
}
