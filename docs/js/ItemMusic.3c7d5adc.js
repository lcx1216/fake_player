"use strict";(self["webpackChunkwyym"]=self["webpackChunkwyym"]||[]).push([[420],{7975:function(s,i,a){a.r(i),a.d(i,{default:function(){return us}});var t=a(6252),l=a(3577);const n={class:"musiclist"},c={class:"listTop"},o={class:"topLeft"},e=(0,t._)("i",{class:"iconfont icon-bofang"},null,-1),u=(0,t._)("span",{class:"topname"},"播放全部",-1),r={class:"totalnum"},p={class:"topRight"},m={class:"subblock"},d=(0,t._)("i",{class:"iconfont icon-jiahao"},null,-1),v={class:"sub"},_={class:"music"},y=["onClick"],g={class:"serial"},f={class:"nametop"},w={class:"name van-ellipsis"},b={class:"anthor van-ellipsis"},h={class:"musicright"},k={key:0,class:"iconfont icon-shipin"},L=(0,t._)("i",{class:"iconfont icon-31liebiao"},null,-1);function z(s,i,a,z,C,D){return(0,t.wg)(),(0,t.iD)("div",n,[(0,t._)("div",c,[(0,t._)("div",o,[e,u,(0,t._)("span",r,"(共"+(0,l.zw)(a.musicList.length)+"首)",1)]),(0,t._)("div",p,[(0,t._)("div",m,[d,(0,t._)("span",v,"收藏 ("+(0,l.zw)(a.subscribedCount)+")",1)])])]),(0,t._)("div",_,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(a.musicList,((s,i)=>((0,t.wg)(),(0,t.iD)("div",{class:"singleMusic",key:i},[(0,t._)("div",{class:"mucisname",onClick:s=>D.playMusic(i)},[(0,t._)("div",g,(0,l.zw)(i+1),1),(0,t._)("div",f,[(0,t._)("div",w,(0,l.zw)(s.name),1),(0,t._)("div",b,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(s.ar,((s,i)=>((0,t.wg)(),(0,t.iD)("span",{key:i},(0,l.zw)(s.name),1)))),128))])])],8,y),(0,t._)("div",h,[0!=s.mv?((0,t.wg)(),(0,t.iD)("i",k)):(0,t.kq)("",!0),L])])))),128))])])}var C=a(3907),D={setup(s){function i(s){return s.length>18&&(s=s.substr(0,16)+"..."),s}return console.log(s),{numcut:i}},props:["musicList","subscribedCount"],methods:{playMusic:function(s){this.updateMusicList(this.musicList),this.updateMusicListIndex(s)},...(0,C.OI)(["updateMusicList","updateMusicListIndex"])}},I=a(3744);const M=(0,I.Z)(D,[["render",z]]);var j=M;const x={class:"itemmusictop"},q=["src"],S={class:"musictop2"},H={class:"topleft"},N=(0,t._)("span",{class:""}," 歌单 ",-1),O=(0,t._)("div",{class:"topright"},[(0,t._)("i",{class:"iconfont icon-sousuo"}),(0,t._)("i",{class:"iconfont icon-31liebiao"})],-1),U={class:"musictopmid"},Y=["src"],Z={class:"topmidright"},J={class:"musictopname"},K={key:0,class:"namedes"},T=["src"],W={class:"nickname"},$=(0,t._)("i",{class:"iconfont icon-youjiantou"},null,-1),E={class:"description van-multi-ellipsis--l2"},R={class:"musictopbot"},A={class:"iconnum"},B=(0,t._)("i",{class:"iconfont icon-shouye"},null,-1),F={class:"des"},G={class:"iconnum"},P=(0,t._)("i",{class:"iconfont icon-fenxiang1"},null,-1),Q={class:"des"},V=(0,t.uE)('<div class="iconnum"><i class="iconfont icon-xiazai1"></i><span class="des">下载</span></div><div class="iconnum"><i class="iconfont icon-duoxuan"></i><span class="des">多选</span></div>',2);function X(s,i,a,n,c,o){return(0,t.wg)(),(0,t.iD)("div",x,[(0,t._)("img",{src:a.playlist.coverImgUrl,alt:"",class:"bgimg"},null,8,q),(0,t._)("div",S,[(0,t._)("div",H,[(0,t._)("i",{class:"iconfont icon-zuojiantou",onClick:i[0]||(i[0]=i=>s.$router.go(-1))}),N]),O]),(0,t._)("div",U,[(0,t._)("img",{src:a.playlist.coverImgUrl,alt:"",class:"midimg"},null,8,Y),(0,t._)("div",Z,[(0,t._)("span",J,(0,l.zw)(a.playlist.name),1),a.playlist.creator?((0,t.wg)(),(0,t.iD)("div",K,[(0,t._)("img",{src:a.playlist.creator.avatarUrl,alt:"",class:"avatar"},null,8,T),(0,t._)("span",W,(0,l.zw)(a.playlist.creator.nickname),1),$])):(0,t.kq)("",!0),(0,t._)("span",E,(0,l.zw)(a.playlist.description),1)])]),(0,t._)("div",R,[(0,t._)("div",A,[B,(0,t._)("span",F,(0,l.zw)(a.playlist.commentCount),1)]),(0,t._)("div",G,[P,(0,t._)("span",Q,(0,l.zw)(a.playlist.shareCount),1)]),V])])}var ss={setup(s){console.log(s),(s.playlist.creator="")&&(s.playlist.creator=JSON.parse(sessionStorage.getItem().playlist).creator)},props:["playlist"]};const is=(0,I.Z)(ss,[["render",X]]);var as=is;function ts(s,i,a,l,n,c){const o=as,e=j;return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(o,{playlist:l.state.playlist},null,8,["playlist"]),(0,t.Wm)(e,{musicList:l.state.musicList,subscribedCount:l.state.playlist.subscribedCount},null,8,["musicList","subscribedCount"])],64)}var ls=a(2119),ns=a(2262),cs=a(7391),os={components:{ItemMusicTop:as,ItemMusicList:j},setup(){const s=(0,ns.qj)({playlist:{},musicList:[]});return(0,t.bv)((async()=>{let i=(0,ls.yj)().query.id,a=await(0,cs.N$)(i);s.playlist=a.data.playlist;let t=await(0,cs.i9)(i);s.musicList=t.data.songs,sessionStorage.setItem("itemDetail",JSON.stringify(s))})),{state:s}}};const es=(0,I.Z)(os,[["render",ts]]);var us=es}}]);
//# sourceMappingURL=ItemMusic.3c7d5adc.js.map