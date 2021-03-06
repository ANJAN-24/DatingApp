using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.Data
{
    public class DataContext :DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options):base(options){}
        public DbSet<Values> values{get;set;}
        public DbSet<Users> users {get;set;}

    }
}