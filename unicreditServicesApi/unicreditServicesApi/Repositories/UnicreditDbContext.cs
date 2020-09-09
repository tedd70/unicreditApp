using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using unicreditServicesApi.Models;

namespace unicreditServicesApi.Repositories
{
    public class UnicreditDbContext : DbContext
    {
        public UnicreditDbContext(DbContextOptions<UnicreditDbContext> options)
            : base(options) 
        {}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }

        protected override void OnModelCreating(ModelBuilder modelBuider) { }

        //Entities
        public DbSet<Category> Categories { get; set; }
        public DbSet<Book> Books { get; set; }
    }
}
