<%@ Page language="c#" MasterPageFile="/AdminCP/ClearAdmin.master" CodeFile="ItemActiveComments.aspx.cs" ValidateRequest="false" Inherits="AdminItems_SitePages_ItemActiveComments"  %>
<%@ Register src="../../../../AdminCP/_UserControls/ItemsComments/Comments.ascx" tagname="Comments" tagprefix="uc2" %>
<%@ Register src="../../../../Content/AdminDesign/ItemsTopMenu.ascx" tagname="ItemsTopMenu" tagprefix="uc20" %>
<asp:Content id="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <uc20:ItemsTopMenu ID="ItemsTopMenu1" runat="server" />
    <uc2:Comments ID="ucComments" runat="server" IsAvilableCondition="true" IsActive="true" NotSeenCondition="false" PageFile="ItemActiveComments.aspx" />

</asp:Content>

