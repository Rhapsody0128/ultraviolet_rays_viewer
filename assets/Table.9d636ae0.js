import{p as t,m as e,r as a,o as l,c as s,a as i,t as o,F as r,n as u,q as n}from"./vendor.33d7487a.js";const d=n();t("data-v-53df95c4");const h={id:"Home"},m=i("h2",null,"Table",-1),b=i("h3",null,"請選擇觀測站",-1);e();const p=d(((t,e,n,p,c,g)=>{const S=a("el-header"),f=a("el-option"),y=a("el-option-group"),N=a("el-select"),D=a("el-col"),T=a("el-row"),C=a("el-table-column"),I=a("el-table"),v=a("el-main");return l(),s("div",h,[i(S),i(v,null,{default:d((()=>[i("h1",null,"台灣紫外線指數 "+o(g.getSiteName),1),m,i(T,{type:"flex",justify:"center"},{default:d((()=>[i(D,{sm:24},{default:d((()=>[b,i(N,{modelValue:c.SiteName,"onUpdate:modelValue":e[1]||(e[1]=t=>c.SiteName=t),placeholder:"請選擇觀測站"},{default:d((()=>[(l(!0),s(r,null,u(c.options,(t=>(l(),s(y,{key:t.label,label:t.label},{default:d((()=>[(l(!0),s(r,null,u(t.options,(t=>(l(),s(f,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])))),128))])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(T,{type:"flex",justify:"center"},{default:d((()=>[i(D,{lg:10,md:14,sm:18,xs:24},{default:d((()=>[i(I,{data:g.tableData,style:{width:"100%"},"max-height":"580"},{default:d((()=>[i(C,{prop:"PublishTime",label:"時間",sortable:"",width:"150"}),i(C,{prop:"UVI",label:"UVI指數",sortable:"",width:"150"}),i(C,{prop:"SiteName",label:"站點",sortable:"",width:"150"}),i(C,{prop:"County",label:"縣市",sortable:"",width:"150"}),i(C,{prop:"PublishAgency",label:"資訊來源",sortable:"",width:"150"})])),_:1},8,["data"])])),_:1})])),_:1})])),_:1})])}));const c={data:()=>({datas:[],SiteName:"",options:[],dialogVisible:!1}),computed:{getSiteName(){return this.SiteName=this.$store.getters.getSiteName,this.$store.getters.getSiteName},getOptions(){let t=[],e={},a=this.sortDatabyTime[0].PublishTime,l="";return this.sortData.map((s=>{s.PublishTime===a&&(s.County===l?e.options.push({value:s.SiteName}):(t.push(e),e={label:s.County,options:[{value:s.SiteName}]}),l=s.County)})),t.shift(),t},sortData(){return this.datas.sort((function(t,e){return t.County<e.County?1:-1}))},sortDatabyTime(){return this.datas.sort((function(t,e){return t.PublishTime<e.PublishTime?1:-1}))},selectData(){return this.sortData.filter((t=>t.SiteName===this.SiteName))},barData(){let t={labels:[],datasets:[{label:"紫外線指數",data:[],backgroundColor:["#77CEFF","#0079AF","#123E6B","#97B0C4","#A5C8ED","#97B0C4","#A5C8ED"]}]};return this.selectData.map((e=>{let a=0;a=parseInt(e.UVI)<0?0:e.UVI,t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(a)})),t},lineData(){let t={labels:[],datasets:[{fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1,label:"紫外線指數",data:[]}]};return this.selectData.map((e=>{let a=0;a=parseInt(e.UVI)<0?0:e.UVI,t.labels.push(this.dateToString(e.PublishTime)),t.datasets[0].data.push(a)})),t},tableData(){let t=[];return this.selectData.map((e=>{let a=0;a=parseInt(e.UVI)<0?0:e.UVI;let l={County:e.County,PublishAgency:e.PublishAgency,PublishTime:this.dateToString(e.PublishTime),SiteName:e.SiteName,UVI:a};t.push(l)})),t}},methods:{dateToString(t){let e=[];return e=t.split("-"),e=e[2].split(" "),e=e[0]+"號 "+e[1],e},commitSiteName(){this.$store.commit("selectSite",this.SiteName)}},mounted(){try{this.axios.get("https://data.epa.gov.tw/api/v1/uv_s_01?limit=1000&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&sort=ImportDate%20desc&format=json").then((t=>{this.datas=t.data.records,this.options=this.getOptions}))}catch(t){console.log(t)}},watch:{SiteName:"commitSiteName"}};c.render=p,c.__scopeId="data-v-53df95c4";export{c as default};