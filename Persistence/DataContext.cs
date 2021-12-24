using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        private DbSet<Activity> myProperty;

        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Activity> Activities{get;set;}
       

       
    }
}