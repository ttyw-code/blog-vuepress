import { CodeTabs } from "C:/workspace/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.78_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dvv4muc72ve7w3a4lkprbfe64a/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "C:/workspace/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.78_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dvv4muc72ve7w3a4lkprbfe64a/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "C:/workspace/vuepress/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.78_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_dvv4muc72ve7w3a4lkprbfe64a/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
