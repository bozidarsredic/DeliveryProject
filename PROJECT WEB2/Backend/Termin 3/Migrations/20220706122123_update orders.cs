using Microsoft.EntityFrameworkCore.Migrations;

namespace Termin_6.Migrations
{
    public partial class updateorders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "name",
                table: "Orders",
                newName: "nameOfProduct");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "nameOfProduct",
                table: "Orders",
                newName: "name");
        }
    }
}
