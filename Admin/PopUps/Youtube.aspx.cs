﻿using System;using DCCMSNameSpace;
using System.Collections;
using System.Configuration;
using System.Data;

using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;


public partial class AdminCP_Youtube : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if(!IsPostBack)
        {
            if (Request.QueryString["v"] != null)
            {
                ltrYouTubeCode.Text = PlayersBuilder.LoadYoutubePlayer(Request.QueryString["v"]);
            }
        }
    }
}
