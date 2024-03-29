﻿using System.Web;
using System.Web.Optimization;

namespace MVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new StyleBundle("~/bundles/Styles").Include(
                        //"~/_assets/css/bootstrap.css",
                        "~/_assets/css/style.css",
                        "~/_assets/css/style.ar.css",
                        "~/_assets/css/responsive.css",
                        "~/_assets/css/layout-semiboxed.css",
                        "~/_assets/fonts/fonts.css"

                        ));

 bundles.Add(new ScriptBundle("~/bundles/siteScripts").Include(
                        "~/_assets/js/plugins.js", "~/_assets/js/common.js"
                        ));
            /*

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            */
            // Set EnableOptimizations to false for debugging. For more information,
            // visit http://go.microsoft.com/fwlink/?LinkId=301862
            BundleTable.EnableOptimizations = true;
           // BundleTable.
        }
    }
}
