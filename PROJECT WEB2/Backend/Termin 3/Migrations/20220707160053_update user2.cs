using Microsoft.EntityFrameworkCore.Migrations;

namespace Termin_6.Migrations
{
    public partial class updateuser2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "busy",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "image",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "image",
                table: "Users");

            migrationBuilder.AddColumn<bool>(
                name: "busy",
                table: "Users",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
