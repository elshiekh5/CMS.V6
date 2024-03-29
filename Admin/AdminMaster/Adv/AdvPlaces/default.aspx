<%@ Page language="c#" MasterPageFile="~/AdminCP/ClearAdmin.master" CodeFile="default.aspx.cs" Inherits="AdminAdvPlaces_GetAll"  %><%@ Register Assembly="MoversFW" Namespace="MoversFW" TagPrefix="cc1" %>

 <asp:Content id="Content1" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
			<table class="MainTable" cellspacing="0" cellpadding="0" width="100%" border="0" >
				<tr>
				<td>
			<table class="SubTable" cellspacing="0" cellpadding="0" width="100%" border="0" >

				<tr>
					<td class="Result" align="center"  colspan="2">
						<asp:Label ID="lblResult" runat="server" ></asp:Label>
					</td>
				</tr>
				<tr>
					<td class="GridControl" align="center" colspan="2">
						<asp:DataGrid id="dgControl" runat="server" SkinId="GridViewSkin" 
						OnDeleteCommand="dgControl_DeleteCommand" OnItemDataBound="dgControl_ItemDataBound"  >
						<Columns>
							<asp:BoundColumn ItemStyle-Width="20" ItemStyle-CssClass="ItemStyle" ></asp:BoundColumn>
							<asp:BoundColumn  DataField="Title"  ItemStyle-Width="100%" ItemStyle-CssClass="ItemStyleTitle" HeaderText="���� �������"></asp:BoundColumn>
							<asp:TemplateColumn ItemStyle-Width="20px" ItemStyle-CssClass="ItemStyleButton" HeaderText="<%$ Resources:AdminText,Update %>">
							<ItemTemplate>
							<a href='<%# "Save.aspx?id="+DataBinder.Eval(Container.DataItem, "PlaceID") %>' class='Link'>
									<img src="/Content/AdminDesign/global/images/Edit.gif" style="border-width:0px" alt="<%#Resources.AdminText.Update%>" /></a>
							</ItemTemplate>
							</asp:TemplateColumn>
							<asp:TemplateColumn ItemStyle-Width="20px" ItemStyle-CssClass="ItemStyleButton" HeaderText="<%$ Resources:AdminText,Delete %>">
							<ItemTemplate>
								<asp:ImageButton ID="lbtnDelete" SkinID="ibtnGridDelete" CommandName="Delete" runat="server"></asp:ImageButton>
								
							</ItemTemplate>
							</asp:TemplateColumn>
						</Columns>
						</asp:DataGrid>
					</td>
				</tr>
				<tr>
					<td class="PagerControl" align="center" colspan="2">
					</td>
				</tr>

			</table>
			</td>
			</tr>
			</table>
</asp:Content>

