using Microsoft.EntityFrameworkCore.Migrations;

namespace Termin_6.Migrations
{
    public partial class mig1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "validationDeliverers",
                table: "Users",
                newName: "ValidationDeliverers");

            migrationBuilder.RenameColumn(
                name: "username",
                table: "Users",
                newName: "Username");

            migrationBuilder.RenameColumn(
                name: "type",
                table: "Users",
                newName: "Type");

            migrationBuilder.RenameColumn(
                name: "password2",
                table: "Users",
                newName: "Password2");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "Users",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "nameAndLastName",
                table: "Users",
                newName: "NameAndLastName");

            migrationBuilder.RenameColumn(
                name: "image",
                table: "Users",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "idDeliverer",
                table: "Users",
                newName: "IdDeliverer");

            migrationBuilder.RenameColumn(
                name: "email",
                table: "Users",
                newName: "Email");

            migrationBuilder.RenameColumn(
                name: "dateOfBirth",
                table: "Users",
                newName: "DateOfBirth");

            migrationBuilder.RenameColumn(
                name: "address",
                table: "Users",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Users",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Products",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "nameOfProduct",
                table: "Products",
                newName: "NameOfProduct");

            migrationBuilder.RenameColumn(
                name: "ingredients",
                table: "Products",
                newName: "Ingredients");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Products",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "time",
                table: "Orders",
                newName: "Time");

            migrationBuilder.RenameColumn(
                name: "quantity",
                table: "Orders",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "priceOfProduct",
                table: "Orders",
                newName: "PriceOfProduct");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "Orders",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "nameOfProduct",
                table: "Orders",
                newName: "NameOfProduct");

            migrationBuilder.RenameColumn(
                name: "lon",
                table: "Orders",
                newName: "Lon");

            migrationBuilder.RenameColumn(
                name: "lat",
                table: "Orders",
                newName: "Lat");

            migrationBuilder.RenameColumn(
                name: "ingredients",
                table: "Orders",
                newName: "Ingredients");

            migrationBuilder.RenameColumn(
                name: "deliverer",
                table: "Orders",
                newName: "Deliverer");

            migrationBuilder.RenameColumn(
                name: "delivered",
                table: "Orders",
                newName: "Delivered");

            migrationBuilder.RenameColumn(
                name: "customer",
                table: "Orders",
                newName: "Customer");

            migrationBuilder.RenameColumn(
                name: "comment",
                table: "Orders",
                newName: "Comment");

            migrationBuilder.RenameColumn(
                name: "address",
                table: "Orders",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Orders",
                newName: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ValidationDeliverers",
                table: "Users",
                newName: "validationDeliverers");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "Users",
                newName: "username");

            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Users",
                newName: "type");

            migrationBuilder.RenameColumn(
                name: "Password2",
                table: "Users",
                newName: "password2");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "Users",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "NameAndLastName",
                table: "Users",
                newName: "nameAndLastName");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Users",
                newName: "image");

            migrationBuilder.RenameColumn(
                name: "IdDeliverer",
                table: "Users",
                newName: "idDeliverer");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Users",
                newName: "email");

            migrationBuilder.RenameColumn(
                name: "DateOfBirth",
                table: "Users",
                newName: "dateOfBirth");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Users",
                newName: "address");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Users",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Products",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "NameOfProduct",
                table: "Products",
                newName: "nameOfProduct");

            migrationBuilder.RenameColumn(
                name: "Ingredients",
                table: "Products",
                newName: "ingredients");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Products",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "Time",
                table: "Orders",
                newName: "time");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Orders",
                newName: "quantity");

            migrationBuilder.RenameColumn(
                name: "PriceOfProduct",
                table: "Orders",
                newName: "priceOfProduct");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Orders",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "NameOfProduct",
                table: "Orders",
                newName: "nameOfProduct");

            migrationBuilder.RenameColumn(
                name: "Lon",
                table: "Orders",
                newName: "lon");

            migrationBuilder.RenameColumn(
                name: "Lat",
                table: "Orders",
                newName: "lat");

            migrationBuilder.RenameColumn(
                name: "Ingredients",
                table: "Orders",
                newName: "ingredients");

            migrationBuilder.RenameColumn(
                name: "Deliverer",
                table: "Orders",
                newName: "deliverer");

            migrationBuilder.RenameColumn(
                name: "Delivered",
                table: "Orders",
                newName: "delivered");

            migrationBuilder.RenameColumn(
                name: "Customer",
                table: "Orders",
                newName: "customer");

            migrationBuilder.RenameColumn(
                name: "Comment",
                table: "Orders",
                newName: "comment");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Orders",
                newName: "address");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Orders",
                newName: "id");
        }
    }
}
