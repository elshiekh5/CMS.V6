<%@ Page language="c#" MasterPageFile="~/AdminCP/ClearAdmin.master" CodeFile="default.aspx.cs" Inherits="Admin_SiteDeparments_Organization_GetAll"  %>
 <%@ Register src="../../../AdminCP/_UserControls/SiteDeparments/GetAll.ascx" tagname="GetAll" tagprefix="uc1" %>
 <asp:Content id="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <uc1:GetAll ID="ucGetAll" runat="server" />
</asp:Content>

