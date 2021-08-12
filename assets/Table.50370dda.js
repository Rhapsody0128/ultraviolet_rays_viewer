import{p as t,m as e,r as a,o as l,c as s,a as i,t as o,F as r,n as u,q as n}from"./vendor.33d7487a.js";const d=n();t("data-v-ab58a924");const h={id:"Home"},m=i("h2",null,"Table",-1),b=i("h3",null,"請選擇觀測站",-1);e();const p=d(((t,e,n,p,c,g)=>{const S=a("el-header"),y=a("el-option"),f=a("el-option-group"),N=a("el-select"),D=a("el-col"),T=a("el-row"),C=a("el-table-column"),v=a("el-table"),_=a("el-main");return l(),s("div",h,[i(S),i(_,null,{default:d((()=>[i("h1",null,"台灣紫外線指數 "+o(g.getSiteName),1),m,i(T,{type:"flex",justify:"center"},{default:d((()=>[i(D,{sm:24},{default:d((()=>[b,i(N,{modelValue:c.SiteName,"onUpdate:modelValue":e[1]||(e[1]=t=>c.SiteName=t),placeholder:"請選擇觀測站"},{default:d((()=>[(l(!0),s(r,null,u(c.options,(t=>(l(),s(f,{key:t.label,label:t.label},{default:d((()=>[(l(!0),s(r,null,u(t.options,(t=>(l(),s(y,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(T,{type:"flex",justify:"center"},{default:d((()=>[i(D,{lg:10,md:14,sm:18,xs:24},{default:d((()=>[i(v,{data:g.tableData,style:{width:"100%"},"max-height":"580"},{default:d((()=>[i(C,{prop:"PublishTime",label:"時間",sortable:"",width:"150"}),i(C,{prop:"UVI",label:"UVI指數",sortable:"",width:"150"}),i(C,{prop:"SiteName",label:"站點",sortable:"",width:"150"}),i(C,{prop:"County",label:"縣市",sortable:"",width:"150"}),i(C,{prop:"PublishAgency",label:"資訊來源",sortable:"",width:"150"})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1})])}));const c={data:()=>({datas:[],SiteName:"",options:[],dialogVisible:!1}),computed:{getSiteName(){return this.SiteName=this.$store.getters.getSiteName,this.$store.getters.getSiteName},getOptions(){let t=[],e={},a=this.sortDatabyTime[0].PublishTime,l="";return console.log(this.sortData),this.sortData.map((s=>{s.PublishTime===a&&(s.County===l?e.options.push({value:s.SiteName}):(t.push(e),e={label:s.County,options:[{value:s.SiteName}]}),l=s.County)})),t.shift(),t},sortData(){return this.datas.sort((function(t,e){return t.County<e.County?1:-1}))},sortDatabyTime(){return this.datas.sort((function(t,e){return t.PublishTime<e.PublishTime?1:-1}))},selectData(){return this.sortData.filter((t=>t.SiteName===this.SiteName))},barData(){let t={labels:[],datasets:[{label:"紫外線指數",data:[],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED","#97B0C4","#A5C8ED"]}]};return this.selectData.map((e=>{t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(e.UVI)})),t},lineData(){let t={labels:[],datasets:[{fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1,label:"紫外線指數",data:[]}]};return this.selectData.map((e=>{t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(e.UVI)})),t},tableData(){let t=[];return this.selectData.map((e=>{let a={County:e.County,PublishAgency:e.PublishAgency,PublishTime:this.dateToString(e.PublishTime),SiteName:e.SiteName,UVI:e.UVI};t.push(a)})),t}},methods:{dateToString(t){let e=[];return e=t.split("-"),e=e[2].split(" "),e=e[0]+"號 "+e[1],e},commitSiteName(){this.$store.commit("selectSite",this.SiteName)}},mounted(){try{this.axios.get("https://data.epa.gov.tw/api/v1/uv_s_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&sort=ImportDate%20desc&format=json").then((t=>{this.datas=t.data.records,this.options=this.getOptions}))}catch(t){console.log(t)}},watch:{SiteName:"commitSiteName"}};c.render=p,c.__scopeId="data-v-ab58a924";export{c as default};