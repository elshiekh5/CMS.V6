﻿<%@ Control Language="C#" AutoEventWireup="true" %>
  <% 
    List<AppService.FrontItemsModel> ItemsList = AppService.FrontItemsController.GetModuleData((int)SiteModulesMap.TeamWork, "Services");
 %>
<%
    foreach (AppService.FrontItemsModel item in ItemsList)
    {
        %>
         <div class="col-sm-3">
                <div class="thumbnail-style">
                    <img class="img-responsive" src="<%= item.PhotoPathOriginal%>" alt="" />
                    <h3><a><%= item.Title%></a> <small><%= item.AuthorName%></small></h3>
                    <p><%= item.ShortDescription%></p>
                    <ul class="list-unstyled list-inline team-socail">
                    	<li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    	<li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    	<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    </ul>
                </div>
            </div>
      
<%  }
%>
    
    
