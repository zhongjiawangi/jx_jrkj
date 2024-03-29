// 引入Vue构造函数
import Vue from 'vue'

var lazyload = {
  // Vue.use() 默认加载install,并且将Vue当做第一个参数传递过来
  install(vue,payload) {
    // 数组扩展移除元素
    if(!Array.prototype.remove){
      Array.prototype.remove = function(item){
        if(!this.length) return
          var index = this.indexOf(item);
        if( index > -1){
          this.splice(index,1);
          return this
        }
      }
    }

    // 默认值图片 
    var defaultImage = payload.defaultImage || 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png';
    var errorImage = payload.errorImage || 'https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png';
    // 默认离可视区10px时加载图片
    var distanece = payload.scrollDistance || 10;
    // 收集未加载的图片元素和资源
    var listenList = [];
    // 收集已加载的图片元素和资源
    var imageCacheList = [];

    // 是否已经加载完成的图片
    const isAlredyLoad = (imageSrc) => {
      if(imageCacheList.indexOf(imageSrc) > -1){
        return true;
      }else{
        return false;
      }
    }

    //检测图片是否可以加载，如果可以则进行加载
    const isCanShow = (item) =>{
      var ele = item.ele;
      var src = item.src;
      //图片距离页面顶部的距离
      var top = ele.getBoundingClientRect().top;
      //页面可视区域的高度
      var windowHeight = window.innerHeight;
      // top - distance 距离可视区域还有distance像素
      if(top - distanece < windowHeight){ 
        var image = new Image();
        image.src = src;
        image.onload = function() {
          ele.src = src;
          imageCacheList.push(src);
          listenList.remove(item);
        }
        image.onerror = function() {
          ele.src = errorImage;
          imageCacheList.push(src);
          listenList.remove(item);
        }
        return true;
      }else{
        return false;
      }
    };

    const onListenScroll = () => {
      window.addEventListener('scroll',function(){
        var length = listenList.length;
        for(let i = 0;i<length;i++ ){
          isCanShow(listenList[i]);
        }
      })

    }

    //Vue 指令最终的方法
    const addListener = (ele,binding) =>{
      //绑定的图片地址
      var imageSrc = binding.value;

      // 防止重复加载。如果已经加载过，则无需重新加载，直接将src赋值
      if(isAlredyLoad(imageSrc)){  
        ele.src = imageSrc;
        return false;
      }

      var item = {
        ele: ele,
        src: imageSrc
      }

      //图片显示默认的图片
      ele.src = defaultImage;

      //再看看是否可以显示此图片
      if(isCanShow(item)){
        return
      }

      //否则将图片地址和元素均放入监听的lisenList里
      listenList.push(item);
      
      //然后开始监听页面scroll事件
      onListenScroll();
    }

    Vue.directive('lazyload',{
      inserted: addListener,
      updated: addListener
    })
  }
}

export default lazyload;