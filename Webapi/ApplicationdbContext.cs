using Microsoft.EntityFrameworkCore;
using SnackboxAPI.Models;

namespace SnackboxAPI
{
    public class ApplicationdbContext : DbContext
    {
        public ApplicationdbContext(DbContextOptions<ApplicationdbContext> options) : base(options)
        {
        }

		public DbSet<User> Users { get; set; }
		public DbSet<QueryResult> QueryResult { get; set; }
		public DbSet<ExecuteResult> ExecuteResult { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<QueryResult>().HasNoKey().ToView(null);
            modelBuilder.Entity<ExecuteResult>().HasNoKey().ToView(null);

			modelBuilder.Entity<User>(entity =>
			{
				entity.ToTable("User");

				entity.Property(e => e.CreatedDate)
					.HasDefaultValueSql("(getdate())")
					.HasColumnType("datetime");
				entity.Property(e => e.ModifiedDate)
					.HasDefaultValueSql("(getdate())")
					.HasColumnType("datetime");
				entity.Property(e => e.UserRole).HasMaxLength(50);
				entity.Property(e => e.Username).HasMaxLength(100);
			});
		}
    }
}