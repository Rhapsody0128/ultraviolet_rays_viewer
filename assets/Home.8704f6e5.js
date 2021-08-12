import{p as t,m as e,r as a,o as l,c as s,a as i,t as o,F as r,n as u,q as n}from"./vendor.33d7487a.js";const d=n();t("data-v-04fb6eac");const h={id:"Home"},m=i("h3",null,"請選擇觀測站",-1),b=i("h2",null,"Bar Chart",-1),p=i("h2",null,"Line Chart",-1),c=i("h2",null,"Table",-1);e();const g=d(((t,e,n,g,f,S)=>{const D=a("el-header"),y=a("el-option"),N=a("el-option-group"),_=a("el-select"),C=a("el-col"),v=a("el-row"),T=a("bar_chart"),P=a("el-carousel-item"),V=a("line_chart"),w=a("el-table-column"),I=a("el-table"),U=a("el-carousel"),x=a("el-main");return l(),s("div",h,[i(D),i(x,null,{default:d((()=>[i("h1",null,"台灣紫外線指數 "+o(S.getSiteName),1),i(v,{type:"flex",justify:"center"},{default:d((()=>[i(C,{sm:24},{default:d((()=>[m,i(_,{modelValue:f.SiteName,"onUpdate:modelValue":e[1]||(e[1]=t=>f.SiteName=t),placeholder:"請選擇觀測站"},{default:d((()=>[(l(!0),s(r,null,u(f.options,(t=>(l(),s(N,{key:t.label,label:t.label},{default:d((()=>[(l(!0),s(r,null,u(t.options,(t=>(l(),s(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(v,{type:"flex",justify:"center"},{default:d((()=>[i(C,{lg:10,md:14,sm:18,xs:24},{default:d((()=>[i(U,{interval:3e3,"indicator-position":"outside",height:"90vh",pauseOnHover:!0},{default:d((()=>[i(P,{class:"item"},{default:d((()=>[b,i(T,{orgData:S.barData},null,8,["orgData"])])),_:1}),i(P,{class:"item"},{default:d((()=>[p,i(V,{orgData:S.lineData},null,8,["orgData"])])),_:1}),i(P,{class:"item"},{default:d((()=>[c,i(I,{data:S.tableData,style:{width:"100%"},"max-height":"580"},{default:d((()=>[i(w,{prop:"PublishTime",label:"時間",sortable:"",width:"150"}),i(w,{prop:"UVI",label:"UVI指數",sortable:"",width:"150"}),i(w,{prop:"SiteName",label:"站點",sortable:"",width:"150"}),i(w,{prop:"County",label:"縣市",sortable:"",width:"150"}),i(w,{prop:"PublishAgency",label:"資訊來源",sortable:"",width:"150"})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])}));const f={data:()=>({datas:[],SiteName:"",options:[],dialogVisible:!1}),computed:{getSiteName(){return this.SiteName=this.$store.getters.getSiteName,this.$store.getters.getSiteName},getOptions(){let t=[],e={},a=this.sortData[0].PublishTime,l="";return this.sortData.map((s=>{s.PublishTime===a&&(s.County===l?e.options.push({value:s.SiteName}):(t.push(e),e={label:s.County,options:[{value:s.SiteName}]}),l=s.County)})),t.shift(),t},sortData(){return this.datas.sort((function(t,e){return t.County<e.County?1:-1}))},selectData(){return this.sortData.filter((t=>t.SiteName===this.SiteName))},barData(){let t={labels:[],datasets:[{label:"紫外線指數",data:[],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED","#97B0C4","#A5C8ED"]}]};return this.selectData.map((e=>{t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(e.UVI)})),t},lineData(){let t={labels:[],datasets:[{fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1,label:"紫外線指數",data:[]}]};return this.selectData.map((e=>{t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(e.UVI)})),t},tableData(){let t=[];return this.selectData.map((e=>{let a={County:e.County,PublishAgency:e.PublishAgency,PublishTime:this.dateToString(e.PublishTime),SiteName:e.SiteName,UVI:e.UVI};t.push(a)})),t}},methods:{dateToString(t){let e=[];return e=t.split("-"),e=e[2].split(" "),e=e[0]+"號 "+e[1],e},commitSiteName(){this.$store.commit("selectSite",this.SiteName)}},mounted(){try{this.axios.get("https://data.epa.gov.tw/api/v1/uv_s_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&sort=ImportDate%20desc&format=json").then((t=>{this.datas=t.data.records,this.options=this.getOptions}))}catch(t){console.log(t)}},watch:{SiteName:"commitSiteName"}};f.render=g,f.__scopeId="data-v-04fb6eac";export{f as default};